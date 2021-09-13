import React from "react";
import { marginTop } from "../../Helpers/MarginTop";
import { homeCardProps } from "../../Interface/HomeScreen/HomeScreenInterface";

export const HomeScreenCard: React.FC<homeCardProps> = (props) => {
  const { id, name } = props;
  const value = marginTop();

  return (
    <>
      <div className="ml-4">
        <img
          src={name}
          className={`card-image-${id}`}
          alt="img"
          style={{ marginTop: `${value}px` }}
        />
      </div>
    </>
  );
};
