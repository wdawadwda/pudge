/* eslint-disable eslint-comments/disable-enable-pair -- брал свой код из nextjs лень переписывать с типами итд */
/* eslint-disable eslint-comments/require-description -- брал свой код из nextjs лень переписывать с типами итд */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useCallback, useEffect, useRef, useState } from "react";

import style from "./animation.module.scss";
import { Bubble } from "./Bubble";
import {
  createInitialBubbles,
  getBubbleConfig,
  throttle,
} from "./repellingBubbles.utils/repellingBubbles.utils";
import { useWindowResize } from "./useResize/UseWindowResize";
export const RepellingBubbles = ({ quantityOfBubbles }) => {
  const containerReference = useRef(null);
  const [bubbles, setBubbles] = useState([]);
  const requestReference = useRef();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [previousCursorPosition, setPreviousCursorPosition] = useState({
    x: 0,
    y: 0,
  });
  const windowSize = useWindowResize();

  useEffect(() => {
    // Получаем текущий размер экрана
    const screenWidth = windowSize.width;

    // Определяем количество пузырей и их размеры в зависимости от размера экрана
    const { length, maxSize, minSize, minDistance } = getBubbleConfig(
      screenWidth,
      quantityOfBubbles
    );

    // количество пузырей с случайными координатами и скоростями
    const initialBubbles = createInitialBubbles(
      length,
      containerReference.current.clientWidth,
      containerReference.current.clientHeight,
      maxSize,
      minSize,
      minDistance
    );

    setBubbles(initialBubbles);

    // Функция для обновления позиций и скоростей пузырей
    let containerWidth = 0;
    let containerHeight = 0;

    const updateBubbles = () => {
      // Кэшируем текущие значения ширины и высоты контейнера
      if (!containerWidth || !containerHeight) {
        containerWidth = containerReference.current.clientWidth;
        containerHeight = containerReference.current.clientHeight;
      }

      setBubbles((previousBubbles) =>
        previousBubbles.map((bubble) => {
          let newVx = bubble.vx; // Новая скорость по оси X
          let newVy = bubble.vy; // Новая скорость по оси Y
          const newRotate = bubble.rotate + bubble.rotationSpeed; // Новый угол поворота

          // Перебираем только те пузыри, которые находятся рядом с текущим
          const nearbyBubbles = previousBubbles.filter(
            (otherBubble) =>
              otherBubble.id !== bubble.id &&
              Math.hypot(bubble.x - otherBubble.x, bubble.y - otherBubble.y) <
                bubble.minDistance * 2
          );

          for (const otherBubble of nearbyBubbles) {
            const dx = bubble.x - otherBubble.x; // Разница координат по оси X
            const dy = bubble.y - otherBubble.y; // Разница координат по оси Y
            const distance = Math.hypot(dx, dy); // Расстояние между пузырями

            // Если расстояние между пузырями меньше минимального, то изменяем скорости
            if (distance < bubble.minDistance) {
              const angle = Math.atan2(dy, dx); // Угол между пузырями
              const force =
                (bubble.minDistance - distance) / (bubble.minDistance * 2); // Сила отталкивания
              newVx += Math.cos(angle) * force; // Изменяем скорость по оси X
              newVy += Math.sin(angle) * force; // Изменяем скорость по оси Y
            }
          }

          // Ограничиваем максимальную скорость движения
          newVx = Math.min(Math.max(newVx, -bubble.maxSpeed), bubble.maxSpeed);
          newVy = Math.min(Math.max(newVy, -bubble.maxSpeed), bubble.maxSpeed);

          // Обновляем координаты пузыря
          let newX = bubble.x + newVx;
          let newY = bubble.y + newVy;

          // Отскакивание от границ контейнера
          if (
            newX < -bubble.size ||
            newX + bubble.size > containerWidth + bubble.size
          ) {
            newVx = -newVx;
          }
          if (
            newY < -bubble.size ||
            newY + bubble.size > containerHeight + bubble.size
          ) {
            newVy = -newVy;
          }

          // Обрезаем координаты пузырей, если они вышли за пределы контейнера с учетом дополнительных 200px
          newX = Math.min(
            Math.max(newX, -bubble.size),
            containerWidth + bubble.size - bubble.size
          );
          newY = Math.min(
            Math.max(newY, -bubble.size),
            containerHeight + bubble.size - bubble.size
          );

          // Изменяем размер пузыря
          let newSize = bubble.size + bubble.direction * bubble.speed;
          if (newSize > bubble.maxSize) {
            newSize = bubble.maxSize;
            return { ...bubble, direction: -bubble.direction };
          }
          if (newSize < bubble.minSize) {
            newSize = bubble.minSize;
            return { ...bubble, direction: -bubble.direction };
          }

          // Возвращаем обновленный пузырь
          return {
            ...bubble,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            rotate: newRotate,
            size: newSize,
          };
        })
      );

      requestReference.current = requestAnimationFrame(updateBubbles);
    };

    // Запускаем обновление пузырей
    requestReference.current = requestAnimationFrame(updateBubbles);

    // Возвращаем функцию для очистки таймера анимации при размонтировании компонента
    return () => cancelAnimationFrame(requestReference.current);
  }, [windowSize, quantityOfBubbles, containerReference]);

  // Обновление позиции курсора
  const handleMouseMove = (e) => {
    setPreviousCursorPosition(cursorPosition);
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };
  const throttledHandleMouseMove = throttle(handleMouseMove, 30);

  // Обновление направления движения пузырька исходя из скорости курсора
  const handleMouseEnter = useCallback(
    (bubbleId) => {
      // Скорость курсора
      const cursorSpeed = Math.hypot(
        cursorPosition.x - previousCursorPosition.x,
        cursorPosition.y - previousCursorPosition.y
      );

      // Обновляем скорость пузырька в зависимости от скорости курсора
      setBubbles((previousBubbles) =>
        previousBubbles.map((bubble) =>
          bubble.id === bubbleId
            ? {
                ...bubble,
                vx: -bubble.vx * cursorSpeed,
                vy: -bubble.vy * cursorSpeed,
              }
            : bubble
        )
      );
    },
    [cursorPosition, previousCursorPosition]
  );

  return (
    <div
      ref={containerReference}
      className={style.animContainer}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
      onMouseMove={throttledHandleMouseMove}
      onMouseDown={(event) => event.preventDefault()}
    >
      {bubbles.map((bubble) => (
        <Bubble
          key={bubble.id}
          bubble={bubble}
          onMouseEnter={handleMouseEnter}
        />
      ))}
    </div>
  );
};
