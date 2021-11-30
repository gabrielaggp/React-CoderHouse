import { useState, useEffect } from "react";
import Productos from "../../Productos.json";
import ItemDetail from "../ItemListContainer/ItemDetail";

const ItemDetailContainer = () => {
  const [libro, setLibro] = useState([]);
  const getItem = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("No se encontró el libro seleccionado");
        }
      }, 2000);
    });

  useEffect(() => {
    getItem(Productos)
      .then((result) => setLibro(result[0]))
      .catch((err) => console.log(err));
  }, []);

  return <ItemDetail item={libro} />;
};

export default ItemDetailContainer;
