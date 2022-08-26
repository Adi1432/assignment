import React from "react";
import Dishes from "./Dishes";
import MealTypes from "./MealTypes";
import PopularDishes from "./PopularDishes";
const Navbar = () => {
  const current = new Date();
  const date = `${current.getDate()}-${
    current.getMonth() + 1
  }-${current.getFullYear()}`;

  return (
    <>
      <div
        style={{
          width: "100%",
          position: "sticky",
          top: 0,
          background: "white",
        }}
      >
        <div
          style={{
            width: "100%",
            background: "black",
            height: "4rem",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              margin: "0 auto",
              top: "40%",
              width: "80%",
              border: "1px solid green",
              height: "5rem",
              fontSize: "16px",
              background: "white",

              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <p>📆 {date}</p>
            <p>|</p>
            <p>⏰ 10.30 Pm-12.30 Pm</p>
          </div>
        </div>
        <MealTypes />
        <PopularDishes />
      </div>

      <Dishes />
    </>
  );
};

export default Navbar;
