import React from "react";
import { marginTop } from "../../Helpers/MarginTop";

function HomeScreenCard(props: any) {
  const { id, name } = props;
  const value = marginTop();

  return (
    <>
      <div key={id} className="card-wrapper">
        <img
          src={name}
          className={`cardimage-${id}`}
          alt="img"
          style={{ marginTop: `${value}px` }}
        />
      </div>
    </>
  );
}

export default HomeScreenCard;
