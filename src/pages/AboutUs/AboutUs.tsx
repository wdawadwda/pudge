import classNames from "classnames";

import Styles from "~/features/PageSections/pageSections.module.scss";

import Style from "./about.module.scss";

export const AboutUs = () => {
  return (
    <div
      className={`${classNames({
        [Style.AboutContainer]: true,
        [Styles.Container]: true,
      })}`}
    >
      <div
        className={`${classNames({
          [Style.AboutSectionContent]: true,
          [Styles.Content]: true,
        })}`}
      >
        <h2>Немного о нас:</h2>
        <h2>OUR MISSION</h2>
        <p>
          <strong>Pudge.by</strong> – это новая сеть компьютерных клубов в
          Минске, оборудованный всем необходимым для качественной и атмосферной
          онлайн-игры. К нам в киберклуб приходят ценители активного
          киберспортивного и виртуального отдыха, а также для того, чтоб найти
          единомышленников. Благодаря производительным компьютерам, вы можете
          поиграть в любую новинку или состязаться с мощным онлайн-противником
          без подвисания и «глюков».
        </p>
        <p>
          <strong style={{ color: "var(--pudge--text-second3-color)" }}>
            У нас вы нйдёте:
          </strong>{" "}
          мощные игровые <strong>PC</strong>, удобные кресла и периферию
        </p>
        <p>
          Также вы сможете воспользоваться <strong>PS 5</strong>,{" "}
          <strong style={{ color: "var(--pudge--text-second3-color)" }}>
            купить напитки и закукси
          </strong>
        </p>
      </div>
    </div>
  );
};
