import React from "react";
import { Icon } from "@iconify/react";


export default function Logo() {
  return (
    <div className="HeaderLogo">
      <Icon icon="arcticons:sofascore-alt" color="#114683" fontSize={25} />
      <h1 className="HeaderHeading">Furniro</h1>
    </div>
  );
}
