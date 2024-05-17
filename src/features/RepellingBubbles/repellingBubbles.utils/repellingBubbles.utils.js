/* eslint-disable eslint-comments/disable-enable-pair -- брал свой код из nextjs лень переписывать с типами итд */
/* eslint-disable eslint-comments/require-description -- брал свой код из nextjs лень переписывать с типами итд */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export const getBubbleConfig = (screenWidth, quantityOfBubbles) => {
  let length;
  let maxSize;
  let minSize;
  let minDistance;

  if (screenWidth > 768) {
    length = quantityOfBubbles.lg.length;
    maxSize = quantityOfBubbles.lg.maxSize;
    minSize = quantityOfBubbles.lg.minSize;
    minDistance = quantityOfBubbles.lg.minDistance;
  } else if (screenWidth <= 768 && screenWidth > 480) {
    length = quantityOfBubbles.md.length;
    maxSize = quantityOfBubbles.md.maxSize;
    minSize = quantityOfBubbles.md.minSize;
    minDistance = quantityOfBubbles.md.minDistance;
  } else if (screenWidth <= 480) {
    length = quantityOfBubbles.sm.length;
    maxSize = quantityOfBubbles.sm.maxSize;
    minSize = quantityOfBubbles.sm.minSize;
    minDistance = quantityOfBubbles.sm.minDistance;
  }

  return { length, maxSize, minSize, minDistance };
};

export const createInitialBubbles = (
  length,
  containerWidth,
  containerHeight,
  maxSize,
  minSize,
  minDistance
) =>
  Array.from({ length }, (_, index) => ({
    id: index,
    x: Math.random() * containerWidth,
    y: Math.random() * containerHeight,
    vx: Math.random() * 2 - 1,
    vy: Math.random() * 2 - 1,
    rotate: Math.random() * 360,
    rotationSpeed:
      index % 2 === 0
        ? Math.random() * 1.5 - 0.1
        : -(Math.random() * 1.5 - 0.1),
    size: Math.random() * (maxSize - minSize) + minSize,
    minDistance,
    maxSize,
    minSize,
    direction: index % 2 === 0 ? -1 : 1,
    speed: Math.random() * 0.2 + 0.1,
    maxSpeed: 3,
  }));

export const throttle = (callback, delay) => {
  let previousCall = 0;

  // eslint-disable-next-line unicorn/prevent-abbreviations
  return (...args) => {
    const currentTime = Date.now();
    const timeDifference = currentTime - previousCall;

    if (timeDifference >= delay) {
      previousCall = currentTime;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      callback(...args);
    }
  };
};
