// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IcsharpHistory2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 29"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.708 3.625A10.875 10.875 0 004.833 14.5H1.208l4.7 4.7.085.17 4.882-4.87H7.25a8.452 8.452 0 018.458-8.458 8.452 8.452 0 018.459 8.458 8.452 8.452 0 01-8.459 8.458A8.39 8.39 0 019.74 20.47l-1.716 1.716a10.82 10.82 0 007.685 3.19 10.875 10.875 0 100-21.75zM14.5 9.667v6.041l5.135 3.045.93-1.558-4.253-2.526V9.667H14.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IcsharpHistory2Icon;
/* prettier-ignore-end */
