// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Rectangle4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 417 124"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#MubhaJx3u4a)"}>
        <path d={"M30 30h326.457L387 94H30V30z"} fill={"currentColor"}></path>
      </g>

      <defs>
        <filter
          id={"MubhaJx3u4a"}
          x={"0"}
          y={"0"}
          width={"417"}
          height={"124"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feGaussianBlur
            stdDeviation={"15"}
            result={"effect1_foregroundBlur_1531_4"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Rectangle4Icon;
/* prettier-ignore-end */
