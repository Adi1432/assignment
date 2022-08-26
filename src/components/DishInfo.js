import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DishInfo = () => {
  const { id } = useParams();
  const [dish, setDish] = useState({});

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/${id}`
      );
      setDish(res.data);
    })();
  }, [id]);
  return (
    <>
      <div
        className="Dishbgi"
        style={{
          padding: "2rem 2rem 0 2rem",
        }}
      >
        <div style={{ borderBottom: "1px solid black", paddingBottom: "1rem" }}>
          <div style={{ width: "70%" }}>
            <div
              style={{
                fontSize: "0.7rem",
                display: "flex",
                gap: "1rem",
                alignItems: "flex-end",
              }}
            >
              <h1>{dish.name}</h1>
              <span
                style={{
                  padding: "1px 2px",
                  background: "green",
                  color: "white",
                }}
              >
                4.2
              </span>
            </div>
            <p
              style={{ fontSize: "0.8rem", lineHeight: 1.5, marginTop: "1rem" }}
            >
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                lineHeight: 1.5,
                marginTop: "1rem",
                color: "black",
              }}
            >
              🕛 {dish.timeToPrepare}
            </p>
          </div>
        </div>
        <div style={{ padding: "2rem 0", borderBottom: "1px solid black" }}>
          <h2 style={{ marginBottom: "0.7" }}>Ingredients</h2>
          <span>For 2 people</span>
        </div>
        {dish?.ingredients?.vegetables ? (
          <div style={{ padding: "2rem 0", borderBottom: "1px solid black" }}>
            <h2>vegetables ({dish?.ingredients?.vegetables.length})</h2>
            <div style={{ marginTop: "0.5rem" }}>
              {dish?.ingredients?.vegetables.map((elem, idx) => {
                return (
                  <div
                    key={idx}
                    style={{
                      fontSize: ".8rem",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>{elem.name}</span>
                    <span>{elem.quantity}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}

        {dish?.ingredients?.spices ? (
          <div style={{ padding: "2rem 0", borderBottom: "1px solid black" }}>
            <h2>spices ({dish?.ingredients?.spices.length})</h2>
            <div style={{ marginTop: "0.5rem" }}>
              {dish?.ingredients?.spices.map((elem, idx) => {
                return (
                  <div
                    key={idx}
                    style={{
                      fontSize: ".8rem",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>{elem.name}</span>
                    <span>{elem.quantity}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}

        {dish?.ingredients?.appliances ? (
          <div style={{ padding: "2rem 0", borderBottom: "1px solid black" }}>
            <h2>appliances ({dish?.ingredients?.appliances.length})</h2>
            <div style={{ marginTop: "0.5rem", display: "flex", gap: "1rem" }}>
              {dish?.ingredients?.appliances.map((elem, idx) => {
                return (
                  <div
                    key={idx}
                    style={{
                      fontSize: ".8rem",
                    }}
                  >
                    <span>{elem.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default DishInfo;
