/* eslint-disable eslint-comments/disable-enable-pair -- брал свой код из nextjs лень переписывать с типами итд */
/* eslint-disable eslint-comments/require-description -- брал свой код из nextjs лень переписывать с типами итд */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import React from "react";

import { motion } from "framer-motion";

import bubbleImage from "~/assets/logo/pudge_logo_y.png";

const BubbleComponent = ({ bubble, onMouseEnter }) => (
  <motion.div
    style={{
      // borderRadius: "50%",
      width: bubble.size,
      height: bubble.size,
      position: "absolute",
      left: bubble.x,
      top: bubble.y,
      transform: `rotate(${bubble.rotate}deg)`,
      userSelect: "none",
    }}
    onMouseEnter={() => onMouseEnter(bubble.id)}
  >
    <img
      src={bubbleImage}
      alt="img"
      style={{
        // borderRadius: "50%",
        objectFit: "cover",
        width: "100%",
        height: "100%",
      }}
    />
  </motion.div>
);

BubbleComponent.displayName = "Bubble";

// eslint-disable-next-line import/no-named-as-default-member
export const Bubble = React.memo(BubbleComponent);
