import { Link } from "react-router-dom";

import { socialLinksData } from "./social.const";
import Style from "./social.module.scss";

export const Social = () => {
  return (
    <div className={Style.social}>
      {socialLinksData.map((linkData, index) => {
        const IconComponent = linkData.icon;
        return (
          <Link
            target="_blank"
            key={index}
            to={linkData.to}
            className={Style.socialLink}
          >
            <IconComponent />
          </Link>
        );
      })}
    </div>
  );
};
