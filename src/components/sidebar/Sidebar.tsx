// components/sidebar/Sidebar.tsx
"use client";
import React, { useContext } from 'react';
import Image from 'next/image';
import CartContext from '@/hooks/CartContext';

const Sidebar: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('Sidebar must be used within a CartProvider');
  }

  const { cartItems, removeFromCart, clearCart } = cartContext;

  return (
    <aside style={{ width: '300px', padding: '20px', borderLeft: '1px solid #ccc', position: 'fixed', right: '0', top: '0', height: '100vh', backgroundColor: '#f9f9f9' }}>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} style={{ marginBottom: '10px' }}>
              <Image src={item.img} alt={item.name} width={50} height={50} style={{ marginRight: '10px' }}  loading='lazy' />
               {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '10px', color: 'red' }}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={clearCart} style={{ marginTop: '20px', color: 'red' }}>Vaciar Carrito</button>
    </aside>
  );
};

export default Sidebar;
