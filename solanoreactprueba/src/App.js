import React, { useEffect, useState } from 'react';
import { collection, addDoc, deleteDoc, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase';

function App() {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [error, setError] = useState('');
  

  const agregarProducto = async (e) => {
    e.preventDefault();
    const precioNumero=Number(precio);
    const stockNumero=Number(stock);
    if (!nombre || !precio || !stock){
      setError('Todos los campos son obligatorios');
      return;
    } 

    if (precioNumero < 0 || stockNumero < 0){
      setError('Todos los campos son obligatorios');
      return;
    } 

    if (precioNumero >= 0 || stockNumero>= 0) {
        await addDoc(collection(db, 'products'), { nombre, precioNumero, stockNumero });
    }

    setNombre('');
    setPrecio('');
    setStock('');
  };

  

  return (
    <div>
      <h1>{'React CRUD - Solano Prueba 1'}</h1>
      <form onSubmit={agregarProducto}>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
        <input value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder="Precio" type="number" />
        <input value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock" type="number" />
        <button type="submit">Agregar</button>
      </form>

    </div>
  );
}

export default App;