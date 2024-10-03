import React from "react";
import { Close } from "./close";
import { Menu } from "./menu";
import { LogoAttio } from "./logo-attio";
import { ArrowRight } from "./arrow-right";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  fill?: string;
}

const Icon: React.FC<IconProps & { name: string }> = ({
  name,
  fill,
  ...rest
}) => {
  const icons: { [key: string]: React.FC<IconProps> } = {
    close: Close,
    menu: Menu,
    logoattio: LogoAttio,
    arrowright: ArrowRight,
  };

  const SelectedIcon = icons[name];

  if (!SelectedIcon) {
    return null;
  }

  return <SelectedIcon fill={fill} {...rest} />;
};

export default Icon;
