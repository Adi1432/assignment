import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dishes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
      );
      setData(res.data.dishes);
    })();
  }, []);
  return (
    <div
      className="horizontalImageContainer"
      style={{
        padding: "2.5rem",
        width: "100%",
        overflowY: "hidden",
        height: "auto",
        zIndex: -1,
        background: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "2.5rem",
        }}
      >
        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Recommended</h3>
        <button
          style={{
            border: "none",
            color: "white",
            background: "black",
            fontSize: "1rem",
            padding: "8px 20px",
            borderRadius: "5px",
          }}
        >
          Menu
        </button>
      </div>
      {data.map((dish, idx) => {
        return (
          <Link
            key={idx}
            to={`/dishinfo/${dish.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "2rem 0",
                width: "100%",
                columnGap: "50px",
                borderBottom: "1px solid black",
              }}
            >
              <div
                style={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "5px",
                }}
              >
                <div style={{ display: "flex", columnGap: "5px" }}>
                  <span
                    style={{
                      fontSize: "1.1rem",
                      display: "inline-block",
                      fontWeight: "bold",
                    }}
                  >
                    {dish.name}
                  </span>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      display: "inline-block",
                      background: "green",
                      color: "white",
                      padding: "2px",
                    }}
                  >
                    {dish.rating}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {dish.equipments.map((eqx, idx) => {
                    return (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <p style={{ fontSize: "1.3rem" }}>⛄</p>
                        <p style={{ fontSize: "8px" }}>{eqx}</p>
                      </div>
                    );
                  })}

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h5 style={{ fontSize: "0.8rem" }}>Ingredients</h5>
                    <p style={{ fontSize: "0.8rem", color: "orange" }}>
                      View List
                    </p>
                  </div>
                </div>
                <p style={{ fontSize: "0.5rem" }}>{dish.description}</p>
              </div>
              <div style={{ width: "30%" }}>
                {" "}
                <img
                  style={{ width: "100%", heigth: "100%" }}
                  src={dish.image}
                  alt="dishImage"
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Dishes;
