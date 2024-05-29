"use client"
import React, { useContext } from "react";
import style from "@/components/card/card.module.css";
import Image, { StaticImageData } from "next/image";
import CartContext from "@/hooks/CartContext";

interface Props {
  id: number;
  estado: string;
  imagen: StaticImageData;
  nombre: string;
  precio: number;
}

const Card: React.FC<Props> = ({ id, estado, imagen, nombre, precio }) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("Card must be used within a CartProvider");
  }

  const { addToCart } = cartContext;

  const handleAddToCart = () => {
    const product = { id:id, img:imagen ,name: nombre, price: precio };
    addToCart(product);
  };

  return (
    <div className={style.CardContainer}>
      <Image src={imagen} alt="imagen" className={style.img}  loading="lazy"/>
      <div className={style.body}>
        <div className={style.bodyColumn}>
          <span>{nombre}</span>
          <span>${precio}</span>
        </div>
        <div className={style.bodyColumn2}>
          <h4>{estado}</h4>
        </div>
        <div className={style.cardButton} onClick={handleAddToCart}>
          <span className={style.buttonSpan} >
            Agregar al Carrito
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
