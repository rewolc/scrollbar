import React, { memo } from "react";
import css from "./feature.module.css";

export type featureProps = {};

export const feature: React.FC<featureProps> = ({}) => {
  return (
    <div className={css.container}>
      <></>
    </div>
  );
};

export default feature;
