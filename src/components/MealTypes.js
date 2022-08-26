import React from "react";

const MealTypes = () => {
  let MealTypes = ["Italin", "Indian", "mexican"];
  return (
    <>
      <div
        style={{
          paddingTop: "5rem",
          fontSize: "1.5rem",
          display: "flex",
          justifyContent: "center",
          columnGap: "1rem",
        }}
      >
        {MealTypes.map((meal, idx) => {
          return (
            <span
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid black",
                borderRadius: "30px",
              }}
              key={idx}
            >
              {meal}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default MealTypes;
