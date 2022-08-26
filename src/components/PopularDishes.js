import React from "react";

const PopularDishes = () => {
  const TopDishes = [
    "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/lkn0extnvjywfts4q7gw",
    "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/lkn0extnvjywfts4q7gw",
    "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/lkn0extnvjywfts4q7gw",
    "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/lkn0extnvjywfts4q7gw",
    "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/lkn0extnvjywfts4q7gw",
    "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/lkn0extnvjywfts4q7gw",
    "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/lkn0extnvjywfts4q7gw",
    "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/lkn0extnvjywfts4q7gw",
    "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/lkn0extnvjywfts4q7gw",
    "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/lkn0extnvjywfts4q7gw",
    "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/lkn0extnvjywfts4q7gw",
  ];
  return (
    <div
      style={{
        paddingTop: "2.5rem",
        borderBottom: "1px solid black",
      }}
    >
      <div style={{ paddingLeft: "2rem", width: "100%" }}>
        <h3 style={{ fontSize: "1.5rem" }}>Popular Dishes</h3>
        <div
          className="horizontalImageContainer"
          style={{
            width: "100%",
            paddingTop: "2.5rem",
            display: "grid",
            gridAutoFlow: "column",
            gridAutoColumns: "21%",
            gap: "5px",
            overflowX: "auto",
          }}
        >
          {TopDishes.map((img, idx) => {
            return (
              <div
                key={idx}
                style={{
                  border: "2px solid black",
                  padding: "2.5px",
                  borderRadius: "50%",
                  display: "inline-block",
                }}
              >
                {" "}
                <img
                  width="100%"
                  height="100%"
                  src={img}
                  style={{ borderRadius: "50%" }}
                  alt="popularDishess"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
