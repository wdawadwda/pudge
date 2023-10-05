import classNames from "classnames";
import { Link } from "react-router-dom";

import { ReactComponent as Iinstagram } from "~/assets/social/instagram.svg";
import { clubData } from "~/entities/const/content/clubsContent.const";
import { Expand } from "~/shared/ui/Expand/Expand";
import { NeonStrip } from "~/shared/ui/NeonStrip/NeonStrip";

import Style from "./contacts.module.scss";
import Styles from "../pageSections.module.scss";

export const ContactsSec = () => {
  const data = clubData;
  return (
    <>
      <div
        className={`${classNames({
          [Style.ContactsSecContainer]: true,
          [Styles.Container]: true,
        })}`}
      >
        <div
          className={`${classNames({
            [Style.ContactsSecContent]: true,
            [Styles.Content]: true,
          })}`}
        >
          <h2>Наши контакты:</h2>
          {data.map((selectClub, index) => (
            <div key={index}>
              <Expand titleExpand={`Контакты ${selectClub.name}`}>
                <div className={Style.contactsContent}>
                  <span>{selectClub.contacts.address}</span>
                  <a href={`tel:${selectClub.contacts.phone}`}>
                    {selectClub.contacts.phone}
                  </a>
                  <Link
                    target="_blank"
                    to={selectClub.contacts.instagram}
                    className={Style.socialLink}
                  >
                    <Iinstagram />
                  </Link>
                </div>
              </Expand>
              <NeonStrip color="yellow" marginBottom="50px" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
