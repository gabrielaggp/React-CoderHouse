import ItemList from "./ItemList";
import Productos from "../../Productos.json";
import { useState, useEffect } from "react";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const getLibros = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("No se han encontrado libros");
        }
      }, 2000);
    });

  useEffect(() => {
    getLibros(Productos)
      .then((result) => setItems(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2 className="masVendidos">Libros más vendidos del mes</h2>
      <ItemList items={items} />
    </>
  );
};
export default ItemListContainer;
