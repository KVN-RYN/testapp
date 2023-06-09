// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 54gWnNeJTpdtwf46XhFcJL
// Component: StxBEdBUnp4c
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants as useScreenVariantsvrTwc8W1T6YPe } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: vrTWC8W1T6yPe/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_waiterapp.module.css"; // plasmic-import: 54gWnNeJTpdtwf46XhFcJL/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: StxBEdBUnp4c/css
import Rectangle4Icon from "./icons/PlasmicIcon__Rectangle4"; // plasmic-import: NR-OZhvxfR/icon
import rectangle5VzNn705Y9 from "./images/rectangle5.svg"; // plasmic-import: VzNn705_y9/picture
import rectangle3VmBaqAnve3 from "./images/rectangle3.svg"; // plasmic-import: VmBaqANVE3/picture

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHomepage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsvrTwc8W1T6YPe()
  });
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          {true ? (
            <div
              data-plasmic-name={"iPhone11ProMax1"}
              data-plasmic-override={overrides.iPhone11ProMax1}
              className={classNames(projectcss.all, sty.iPhone11ProMax1)}
            >
              <div
                data-plasmic-name={"toyFacesTansparentBg29"}
                data-plasmic-override={overrides.toyFacesTansparentBg29}
                className={classNames(
                  projectcss.all,
                  sty.toyFacesTansparentBg29
                )}
              />

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__llY0)}
                displayHeight={"271px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"373px"}
                loading={"lazy"}
                src={{
                  src: rectangle5VzNn705Y9,
                  fullWidth: 373,
                  fullHeight: 271,
                  aspectRatio: 1.376384
                }}
              />

              <div
                data-plasmic-name={"toyFacesTansparentBg49"}
                data-plasmic-override={overrides.toyFacesTansparentBg49}
                className={classNames(
                  projectcss.all,
                  sty.toyFacesTansparentBg49
                )}
              />

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__z7OsU)}
                displayHeight={"255px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"454px"}
                loading={"lazy"}
                src={{
                  src: rectangle3VmBaqAnve3,
                  fullWidth: 454,
                  fullHeight: 255,
                  aspectRatio: 1.780392
                }}
              />

              <Rectangle4Icon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />

              <button
                data-plasmic-name={"rectangle2"}
                data-plasmic-override={overrides.rectangle2}
                className={classNames(
                  projectcss.all,
                  projectcss.button,
                  sty.rectangle2
                )}
                onClick={async event => {
                  const $steps = {};
                  $steps["goToLogin"] = true
                    ? (() => {
                        const actionArgs = {
                          destination: __wrapUserFunction(
                            {
                              type: "InteractionArgLoc",
                              actionName: "navigation",
                              interactionUuid: "GiOx9j0Pq",
                              componentUuid: "StxBEdBUnp4c",
                              argName: "destination"
                            },
                            () => `/login`
                          )
                        };
                        return __wrapUserFunction(
                          {
                            type: "InteractionLoc",
                            actionName: "navigation",
                            interactionUuid: "GiOx9j0Pq",
                            componentUuid: "StxBEdBUnp4c"
                          },
                          () =>
                            (({ destination }) => {
                              location.assign(destination);
                            })?.apply(null, [actionArgs]),
                          actionArgs
                        );
                      })()
                    : undefined;
                  if (
                    typeof $steps["goToLogin"] === "object" &&
                    typeof $steps["goToLogin"].then === "function"
                  ) {
                    $steps["goToLogin"] = await __wrapUserPromise(
                      {
                        type: "InteractionLoc",
                        actionName: "navigation",
                        interactionUuid: "GiOx9j0Pq",
                        componentUuid: "StxBEdBUnp4c"
                      },
                      $steps["goToLogin"]
                    );
                  }
                }}
                ref={ref => {
                  $refs["rectangle2"] = ref;
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__k2KB
                )}
              >
                {"Get started"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__t646J
                )}
              >
                {"Effiecient\nWaiters"}
              </div>
              <div
                data-plasmic-name={"image13"}
                data-plasmic-override={overrides.image13}
                className={classNames(projectcss.all, sty.image13)}
              />
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "iPhone11ProMax1",
    "toyFacesTansparentBg29",
    "toyFacesTansparentBg49",
    "svg",
    "rectangle2",
    "image13"
  ],

  iPhone11ProMax1: [
    "iPhone11ProMax1",
    "toyFacesTansparentBg29",
    "toyFacesTansparentBg49",
    "svg",
    "rectangle2",
    "image13"
  ],

  toyFacesTansparentBg29: ["toyFacesTansparentBg29"],
  toyFacesTansparentBg49: ["toyFacesTansparentBg49"],
  svg: ["svg"],
  rectangle2: ["rectangle2"],
  image13: ["image13"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    iPhone11ProMax1: makeNodeComponent("iPhone11ProMax1"),
    toyFacesTansparentBg29: makeNodeComponent("toyFacesTansparentBg29"),
    toyFacesTansparentBg49: makeNodeComponent("toyFacesTansparentBg49"),
    svg: makeNodeComponent("svg"),
    rectangle2: makeNodeComponent("rectangle2"),
    image13: makeNodeComponent("image13"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
