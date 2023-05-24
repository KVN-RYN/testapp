// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Ellipse11Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 45 45"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M45 22.5C45 34.926 34.926 45 22.5 45S0 34.926 0 22.5 10.074 0 22.5 0 45 10.074 45 22.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse11Icon;
/* prettier-ignore-end */
