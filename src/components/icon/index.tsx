import React from "react";
import { Close } from "./close";
import { Menu } from "./menu";
import { LogoAttio } from "./logo-attio";
import { ArrowRight } from "./arrow-right";
import { Box } from "./Box";
import { Chat } from "./chat";
import { Copy } from "./copy";
import { Shiny } from "./shiny";
import { Xtwiter } from "./Xtwiter";
import { Arrow } from "./arrow-bottom";
import { linkedin } from "./linkedin";
import { Dribble } from "./Dribble";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  fill?: string;
}

const Icon: React.FC<IconProps & { name: string; fill?: string }> = ({
  name,
  fill,
  ...rest
}) => {
  const icons: { [key: string]: React.FC<IconProps> } = {
    close: Close,
    menu: Menu,
    logoattio: LogoAttio,
    arrowright: ArrowRight,
    box: Box,
    chat: Chat,
    copy: Copy,
    shiny: Shiny,
    Xtwiter: Xtwiter,
    arrow: Arrow,
    linkedin: linkedin,
    Dribble: Dribble,
  };

  const SelectedIcon = icons[name];

  if (!SelectedIcon) {
    return null;
  }

  return <SelectedIcon fill={fill} {...rest} />;
};

export default Icon;
