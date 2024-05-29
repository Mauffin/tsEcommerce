import React from "react";
import style from "@/components/CardList/CardList.module.css";
import Card from "@/components/card/Card";
import datos from "../assets/data";

const CardList: React.FC = () => {
  return (
    <>
      <h1>Card List</h1>
      <div className={style.CardWrapper}>
        {datos.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            estado={item.estado}
            imagen={item.imagen}
            nombre={item.nombre}
            precio={item.precio}
          />
        ))}
      </div>
    </>
  );
};

export default CardList;
