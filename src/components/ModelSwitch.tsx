import React from "react";
import FullStack from "./FullStack";
import Mobile from "./Mobile";
import Photography from "./Photography";

enum AboutSectionEnum {
  Photography = "Photography",
  Full = "Full",
  Mobile = "Mobile",
  Default = "",
}

const ModelSwitch = ({ selected }: { selected: AboutSectionEnum }) => {
  switch (selected) {
    case AboutSectionEnum.Photography:
      return <Photography />;

    case AboutSectionEnum.Full:
      return <FullStack />;

    case AboutSectionEnum.Mobile:
      return <Mobile />;

    default:
      return <FullStack />;
  }
};

export default ModelSwitch;
