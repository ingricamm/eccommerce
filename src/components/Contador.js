import { useReducer } from "react";
import { TYPES } from "./actions/ContadorAction";
import {
  contadorInitialState,
  contadorReducer,
} from "./reducers/contadorReducer";

const Contador = () => {
  const [state, dispatch] = useReducer(
    contadorReducer,
    contadorInitialState,
   
  );

  const sumar = () => dispatch({ type: TYPES.INCREMENT });

  const restar = () => dispatch({ type: TYPES.DECREMENT });
  
 

  return (
    <div style={{ textAlign: "center" }}>
      <h6>cantidad</h6>
      <nav>
        <button onClick={sumar}>+</button>
        <p>{state.contador}</p>
        <button onClick={restar}>-</button>
        </nav>
     
    </div>
  );
};

export default Contador;