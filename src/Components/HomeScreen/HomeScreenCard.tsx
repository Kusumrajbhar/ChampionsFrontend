// import React from "react";
import { marginTop } from "../../Helpers/MarginTop";

function HomeScreenCard(props: any) {
  const { id, name } = props;
  const value = marginTop();

  return (
    <>
      <div key={id} className="ml-4">
        <img
          src={name}
          className={`card-image-${id}`}
          alt="img"
          style={{ marginTop: `${value}px` }}
        />
      </div>
    </>
  );
}

export default HomeScreenCard;
