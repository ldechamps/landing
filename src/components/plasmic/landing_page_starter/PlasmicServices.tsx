// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9yKGoJuPhuASzRyvAzmezj
// Component: ZwP2soqJuCK6

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Navbar from "../../Navbar"; // plasmic-import: vAN45c9Tme0v/component
import ValueProp from "../../ValueProp"; // plasmic-import: aJnHaFFIy4EU/component
import PriceCard from "../../PriceCard"; // plasmic-import: jy5YgdaxU1zx/component
import FooterSection from "../../FooterSection"; // plasmic-import: AQ-CadsKWzf6/component

import { useScreenVariants as useScreenVariantstyT3UZneAkw } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: TyT3u_zneAkw/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: 9yKGoJuPhuASzRyvAzmezj/projectcss
import sty from "./PlasmicServices.module.css"; // plasmic-import: ZwP2soqJuCK6/css

import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: bXnfiQdjwASO/icon
import TargetIcon from "./icons/PlasmicIcon__Target"; // plasmic-import: 6hfDyUM1sZcW/icon
import FastIcon from "./icons/PlasmicIcon__Fast"; // plasmic-import: mZEk2Y0zbcNz/icon
import StrongIcon from "./icons/PlasmicIcon__Strong"; // plasmic-import: mn-115zrAzoe/icon
import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: oq5LF8G_BYl3/icon
import chart1Yf7Ocd2Y from "./images/chart.png"; // plasmic-import: 1__Yf7OCD2_y/picture
import sparkleQSSs6ORbgkXb from "./images/sparkle.png"; // plasmic-import: qSSs6oRBGKXb/picture
import medalOamVl5HbwEsp from "./images/medal.png"; // plasmic-import: OAMVl5hbwESP/picture
import trophyQ4Et6KjB3K4E from "./images/trophy.png"; // plasmic-import: q4ET6KjB3k4E/picture

createPlasmicElementProxy;

export type PlasmicServices__VariantMembers = {};
export type PlasmicServices__VariantsArgs = {};
type VariantPropType = keyof PlasmicServices__VariantsArgs;
export const PlasmicServices__VariantProps = new Array<VariantPropType>();

export type PlasmicServices__ArgsType = {};
type ArgPropType = keyof PlasmicServices__ArgsType;
export const PlasmicServices__ArgProps = new Array<ArgPropType>();

export type PlasmicServices__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  foreground?: p.Flex<"div">;
  foreground2?: p.Flex<"div">;
  section?: p.Flex<"section">;
  foreground3?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  columns?: p.Flex<"div">;
  footerSection?: p.Flex<typeof FooterSection>;
};

export interface DefaultServicesProps {
  className?: string;
}

const $$ = {};

function PlasmicServices__RenderFunc(props: {
  variants: PlasmicServices__VariantsArgs;
  args: PlasmicServices__ArgsType;
  overrides: PlasmicServices__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantstyT3UZneAkw()
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
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__fuyMh)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground"}
              data-plasmic-override={overrides.foreground}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wdyz2
                )}
              >
                {"Our services"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rhFzC
                )}
              >
                {
                  "A euismod eros a hendrerit tristique suscipit sit aptent dolor adipiscing inceptos cras ullamcorper a vivamus parturient."
                }
              </div>
            </p.Stack>
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground2"}
              data-plasmic-override={overrides.foreground2}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground2)}
            >
              <ValueProp
                card={true}
                className={classNames("__wab_instance", sty.valueProp__yyu86)}
                description={
                  "Quis iaculis tempor a condimentum per eu montes quis inceptos mi et dis suspendisse integer dui. Orci ad pharetra a vestibulum parturient mauris ac nisl cursus at a vestibulum morbi conubia suspendisse massa vestibulum a varius."
                }
                icon={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__cZiWe)}
                    displayHeight={"56px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"56px"}
                    src={{
                      src: chart1Yf7Ocd2Y,
                      fullWidth: 144,
                      fullHeight: 144,
                      aspectRatio: undefined
                    }}
                  />
                }
                title={"Accomplish more"}
              />

              <ValueProp
                card={true}
                className={classNames("__wab_instance", sty.valueProp___4SwU)}
                description={
                  "Ut interdum consectetur a interdum parturient blandit vestibulum vel quisque quis lorem libero imperdiet a sed massa quisque rhoncus sed cum quisque morbi."
                }
                icon={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___3Khhl)}
                    displayHeight={"56px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"56px"}
                    src={{
                      src: sparkleQSSs6ORbgkXb,
                      fullWidth: 144,
                      fullHeight: 144,
                      aspectRatio: undefined
                    }}
                  />
                }
                title={"Best-in-class"}
              />

              <ValueProp
                card={true}
                className={classNames("__wab_instance", sty.valueProp__qqaKy)}
                description={
                  "Ullamcorper adipiscing adipiscing euismod odio nascetur eu magnis pretium arcu fermentum a eget cubilia tempor. Eu cubilia sodales vestibulum massa non ipsum consectetur lorem nibh parturient parturient vestibulum cum cras penatibus donec dui sit sed eleifend conubia condimentum parturient rutrum."
                }
                icon={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__dnsB9)}
                    displayHeight={"56px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"56px"}
                    src={{
                      src: medalOamVl5HbwEsp,
                      fullWidth: 144,
                      fullHeight: 144,
                      aspectRatio: undefined
                    }}
                  />
                }
                title={"Championship award-winners"}
              />

              <ValueProp
                card={true}
                className={classNames("__wab_instance", sty.valueProp__kYgvy)}
                description={
                  "Est parturient imperdiet proin inceptos parturient dignissim risus auctor cubilia cum iaculis eu feugiat justo eu vel at non nisl laoreet ligula porttitor a nunc ac cum habitant urna."
                }
                icon={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__bCnx5)}
                    displayHeight={"56px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"56px"}
                    src={{
                      src: trophyQ4Et6KjB3K4E,
                      fullWidth: 144,
                      fullHeight: 144,
                      aspectRatio: undefined
                    }}
                  />
                }
                title={"Destined for greatness"}
              />
            </p.Stack>
          </p.Stack>
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground3"}
              data-plasmic-override={overrides.foreground3}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground3)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__u7APk)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__obNxl)}>
                  <h2
                    data-plasmic-name={"h2"}
                    data-plasmic-override={overrides.h2}
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2
                    )}
                  >
                    {"Next-level"}
                  </h2>
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__fnmx7
                  )}
                >
                  {"Dui urna enim a tempus commodo adipiscing ullamcorper."}
                </div>
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__natWm)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"columns"}
                  data-plasmic-override={overrides.columns}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.columns)}
                >
                  <div
                    className={classNames(projectcss.all, sty.column___2Kh8R)}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp__x6XB
                      )}
                      darkBackground={true}
                      description={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___9Hogg
                          )}
                        >
                          {
                            "Nulla odio mauris enim parturient adipiscing vestibulum inceptos."
                          }
                        </div>
                      }
                      icon={
                        <HammerIcon
                          className={classNames(projectcss.all, sty.svg__kkDlc)}
                          role={"img"}
                        />
                      }
                      title={"Harder"}
                      vertical={true}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column__sljIb)}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp__weCB
                      )}
                      darkBackground={true}
                      description={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__nadt3
                          )}
                        >
                          {
                            "Consequat scelerisque a eros taciti nisl a sodales."
                          }
                        </div>
                      }
                      icon={
                        <TargetIcon
                          className={classNames(
                            projectcss.all,
                            sty.svg___0V0Lc
                          )}
                          role={"img"}
                        />
                      }
                      title={"Better"}
                      vertical={true}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column__gmI2L)}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp__iwztf
                      )}
                      darkBackground={true}
                      description={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__kb5W6
                          )}
                        >
                          {
                            "Varius ad malesuada ullamcorper cursus scelerisque a a."
                          }
                        </div>
                      }
                      icon={
                        <FastIcon
                          className={classNames(projectcss.all, sty.svg__sz7Hi)}
                          role={"img"}
                        />
                      }
                      title={"Faster"}
                      vertical={true}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column__pxn7C)}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp__sBdis
                      )}
                      darkBackground={true}
                      description={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__rUz8M
                          )}
                        >
                          {
                            "Ut eu nam nostra taciti congue adipiscing curabitur."
                          }
                        </div>
                      }
                      icon={
                        <StrongIcon
                          className={classNames(projectcss.all, sty.svg__uJg2)}
                          role={"img"}
                        />
                      }
                      title={"Stronger"}
                      vertical={true}
                    />
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>
          </section>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__hhrq)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__tpsKp)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__eAFeY)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__yfx77)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__urZ9Y
                    )}
                  >
                    {"Pricing plans"}
                  </div>
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__gLyji
                  )}
                >
                  {
                    "Nascetur nascetur ridiculus scelerisque adipiscing a nascetur varius sed eu a ad semper a est nec litora ante at orci rhoncus a varius auctor aliquam inceptos vestibulum ridiculus."
                  }
                </div>
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__cuvLh)}
              >
                <PriceCard
                  className={classNames("__wab_instance", sty.priceCard__iRsbS)}
                  description={
                    <React.Fragment>
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp___5Xjn
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__ywD4K
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp___9VmIc
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg___2WlDd
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />
                    </React.Fragment>
                  }
                  dollars={"0"}
                />

                <PriceCard
                  action={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__yOwSn
                      )}
                    >
                      {"Buy Pro"}
                    </div>
                  }
                  className={classNames(
                    "__wab_instance",
                    sty.priceCard___8GIfg
                  )}
                  description={
                    <React.Fragment>
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__cwWvv
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__piId
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__of4Xz
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__an0Un
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__iapFb
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__sBxXr
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />
                    </React.Fragment>
                  }
                  dollars={"8"}
                  label={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___7MyQk
                      )}
                    >
                      {"Pro"}
                    </div>
                  }
                />

                <PriceCard
                  action={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___6ZXc9
                      )}
                    >
                      {"Buy Team"}
                    </div>
                  }
                  className={classNames("__wab_instance", sty.priceCard__zXlTs)}
                  description={
                    <React.Fragment>
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp___20N3Q
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__fj37D
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__kW1Tf
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg___9Ksqc
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__rYjSf
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__n5Mer
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__bemWz
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__qYGlv
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />
                    </React.Fragment>
                  }
                  dollars={"16"}
                  label={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___5Cxb0
                      )}
                    >
                      {"Team"}
                    </div>
                  }
                />

                <PriceCard
                  action={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__umx0N
                      )}
                    >
                      {"Contact us"}
                    </div>
                  }
                  className={classNames("__wab_instance", sty.priceCard__vblqz)}
                  description={
                    <React.Fragment>
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__jziQc
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__nTmUj
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__abbxW
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__u5N1H
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__aqsv5
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg___9YIdn
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__qRbnV
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={true}
                        icon={
                          <CheckIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__epMk
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={true}
                      />
                    </React.Fragment>
                  }
                  dollars={"?"}
                  label={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__hqZh
                      )}
                    >
                      {"Enterprise"}
                    </div>
                  }
                  primary={true}
                />
              </p.Stack>
            </p.Stack>
          </p.Stack>
          <FooterSection
            data-plasmic-name={"footerSection"}
            data-plasmic-override={overrides.footerSection}
            className={classNames("__wab_instance", sty.footerSection)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "foreground",
    "foreground2",
    "section",
    "foreground3",
    "h2",
    "columns",
    "footerSection"
  ],
  navbar: ["navbar"],
  foreground: ["foreground"],
  foreground2: ["foreground2"],
  section: ["section", "foreground3", "h2", "columns"],
  foreground3: ["foreground3", "h2", "columns"],
  h2: ["h2"],
  columns: ["columns"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  foreground: "div";
  foreground2: "div";
  section: "section";
  foreground3: "div";
  h2: "h2";
  columns: "div";
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicServices__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicServices__VariantsArgs;
    args?: PlasmicServices__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicServices__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicServices__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicServices__ArgProps,
          internalVariantPropNames: PlasmicServices__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicServices__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServices";
  } else {
    func.displayName = `PlasmicServices.${nodeName}`;
  }
  return func;
}

export const PlasmicServices = Object.assign(
  // Top-level PlasmicServices renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    foreground: makeNodeComponent("foreground"),
    foreground2: makeNodeComponent("foreground2"),
    section: makeNodeComponent("section"),
    foreground3: makeNodeComponent("foreground3"),
    h2: makeNodeComponent("h2"),
    columns: makeNodeComponent("columns"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicServices
    internalVariantProps: PlasmicServices__VariantProps,
    internalArgProps: PlasmicServices__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Services",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicServices;
/* prettier-ignore-end */
