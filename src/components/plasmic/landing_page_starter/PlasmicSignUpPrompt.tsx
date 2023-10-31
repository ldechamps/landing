// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9yKGoJuPhuASzRyvAzmezj
// Component: 2JrdfIII1437

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
import Button from "../../Button"; // plasmic-import: SDaCoeduWJgg/component
import Divider from "../../Divider"; // plasmic-import: yk0BQURjG263/component
import TextInput from "../../TextInput"; // plasmic-import: P82FRSoypaDA/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: 9yKGoJuPhuASzRyvAzmezj/projectcss
import sty from "./PlasmicSignUpPrompt.module.css"; // plasmic-import: 2JrdfIII1437/css

import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: MC95sizZ-iB7/icon
import GoogleIcon from "./icons/PlasmicIcon__Google"; // plasmic-import: Hi2_6wYHoN2q/icon
import SearchIcon from "./icons/PlasmicIcon__Search"; // plasmic-import: 0ds3icbTa3PF/icon
import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: oq5LF8G_BYl3/icon
import WandIcon from "./icons/PlasmicIcon__Wand"; // plasmic-import: w3_eFmzsklMA/icon

createPlasmicElementProxy;

export type PlasmicSignUpPrompt__VariantMembers = {};
export type PlasmicSignUpPrompt__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignUpPrompt__VariantsArgs;
export const PlasmicSignUpPrompt__VariantProps = new Array<VariantPropType>();

export type PlasmicSignUpPrompt__ArgsType = {};
type ArgPropType = keyof PlasmicSignUpPrompt__ArgsType;
export const PlasmicSignUpPrompt__ArgProps = new Array<ArgPropType>();

export type PlasmicSignUpPrompt__OverridesType = {
  root?: p.Flex<"div">;
  textInput?: p.Flex<typeof TextInput>;
  textInput2?: p.Flex<typeof TextInput>;
  textInput3?: p.Flex<typeof TextInput>;
};

export interface DefaultSignUpPromptProps {
  className?: string;
}

const $$ = {};

function PlasmicSignUpPrompt__RenderFunc(props: {
  variants: PlasmicSignUpPrompt__VariantsArgs;
  args: PlasmicSignUpPrompt__ArgsType;
  overrides: PlasmicSignUpPrompt__OverridesType;
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

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "textInput2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "textInput3.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__k0UA)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__j9VQ)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__pjWa5
            )}
          >
            {"Sign up with"}
          </div>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___2NqAz)}
          >
            <Button
              className={classNames("__wab_instance", sty.button__xVsIp)}
              outline={true}
              showStartIcon={true}
              submitsForm={true}
            >
              {"Apple"}
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__lBi43)}
              outline={true}
              showStartIcon={true}
              startIcon={
                <GoogleIcon
                  className={classNames(projectcss.all, sty.svg__gcPu)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              {"Google"}
            </Button>
          </p.Stack>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__oJatq)}
          >
            <Divider
              className={classNames("__wab_instance", sty.divider__un0QA)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__fqwJt
              )}
            >
              {"Or"}
            </div>
            <Divider
              className={classNames("__wab_instance", sty.divider__erz48)}
            />
          </p.Stack>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___0Yk4A)}
          >
            <TextInput
              data-plasmic-name={"textInput"}
              data-plasmic-override={overrides.textInput}
              className={classNames("__wab_instance", sty.textInput)}
              onChange={(...eventArgs) => {
                p.generateStateOnChangeProp($state, ["textInput", "value"])(
                  (e => e.target?.value).apply(null, eventArgs)
                );
              }}
              placeholder={"Full Name"}
              value={
                p.generateStateValueProp($state, ["textInput", "value"]) ?? ""
              }
            />

            <TextInput
              data-plasmic-name={"textInput2"}
              data-plasmic-override={overrides.textInput2}
              className={classNames("__wab_instance", sty.textInput2)}
              onChange={(...eventArgs) => {
                p.generateStateOnChangeProp($state, ["textInput2", "value"])(
                  (e => e.target?.value).apply(null, eventArgs)
                );
              }}
              placeholder={"Email"}
              value={
                p.generateStateValueProp($state, ["textInput2", "value"]) ?? ""
              }
            />

            <TextInput
              data-plasmic-name={"textInput3"}
              data-plasmic-override={overrides.textInput3}
              className={classNames("__wab_instance", sty.textInput3)}
              onChange={(...eventArgs) => {
                p.generateStateOnChangeProp($state, ["textInput3", "value"])(
                  (e => e.target?.value).apply(null, eventArgs)
                );
              }}
              placeholder={"Password"}
              value={
                p.generateStateValueProp($state, ["textInput3", "value"]) ?? ""
              }
            />
          </p.Stack>
          <Button
            className={classNames("__wab_instance", sty.button__kSbeq)}
            color={"indigo"}
            endIcon={
              <WandIcon
                className={classNames(projectcss.all, sty.svg__u2VN)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            {"Start your account"}
          </Button>
        </p.Stack>
        <Divider className={classNames("__wab_instance", sty.divider__x8Owb)} />

        <div className={classNames(projectcss.all, sty.freeBox__lnekw)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__rjwo
            )}
          >
            {
              "A cras sagittis odio vestibulum pulvinar a eget hendrerit id vestibulum a leo sociosqu dictumst dictumst natoque magnis parturient."
            }
          </div>
        </div>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textInput", "textInput2", "textInput3"],
  textInput: ["textInput"],
  textInput2: ["textInput2"],
  textInput3: ["textInput3"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  textInput: typeof TextInput;
  textInput2: typeof TextInput;
  textInput3: typeof TextInput;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignUpPrompt__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignUpPrompt__VariantsArgs;
    args?: PlasmicSignUpPrompt__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignUpPrompt__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSignUpPrompt__ArgsType,
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
          internalArgPropNames: PlasmicSignUpPrompt__ArgProps,
          internalVariantPropNames: PlasmicSignUpPrompt__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSignUpPrompt__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignUpPrompt";
  } else {
    func.displayName = `PlasmicSignUpPrompt.${nodeName}`;
  }
  return func;
}

export const PlasmicSignUpPrompt = Object.assign(
  // Top-level PlasmicSignUpPrompt renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    textInput2: makeNodeComponent("textInput2"),
    textInput3: makeNodeComponent("textInput3"),

    // Metadata about props expected for PlasmicSignUpPrompt
    internalVariantProps: PlasmicSignUpPrompt__VariantProps,
    internalArgProps: PlasmicSignUpPrompt__ArgProps
  }
);

export default PlasmicSignUpPrompt;
/* prettier-ignore-end */
