
import { Button, Icon, Placeholder } from "semantic-ui-react";
import { useState } from "react";


const ItemCount = ({ stock, initial, producto }) => {
  const [counter, setCounter] = useState(parseInt(initial));

  const add = () => {
    if (stock <= 0) {
      alert(
        "Lo lamentamos mucho, momentaneamente no contamos con stock de este producto"
      );
    } else if (counter < stock) {
      setCounter(counter + 1);
    } else if (counter >= stock) {
      alert("Llegaste al limite del stock disponible.");
    }
  };

  const remove = () => {
    if (counter > 0) {
      if (counter > 1) {
        setCounter(counter - 1);
      }
    }
  };

  return (
    <>
      <Placeholder>
        <div>
          <Button onClick={remove} icon labelPosition="left" color="red">
            <Icon name="remove" />
            Eliminar
          </Button>

          <span>
            <h3>{counter}</h3>
          </span>

          <Button onClick={add} icon labelPosition="left" color="green">
            <Icon name="add" />
            Agregar
          </Button>
        </div>
      </Placeholder>
    </>
  );
};

export default ItemCount;
