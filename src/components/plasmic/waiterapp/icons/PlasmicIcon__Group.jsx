// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GroupIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 25"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.477.454a1.55 1.55 0 00-2.192 0L.435 11.304a1.55 1.55 0 002.192 2.191l.454-.454V23.25a1.55 1.55 0 001.55 1.55h3.1a1.55 1.55 0 001.55-1.55v-3.1a1.55 1.55 0 011.55-1.55h3.1a1.55 1.55 0 011.55 1.55v3.1a1.55 1.55 0 001.55 1.55h3.1a1.55 1.55 0 001.55-1.55V13.04l.454.454a1.55 1.55 0 002.192-2.191L13.477.454z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
