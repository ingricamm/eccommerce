import { TYPES } from "./../actions/ContadorAction";

export const contadorInitialState = { contador: 0 };

//para establecer un valor inicial al contador utilizamos la siguiente funcion
// export const contadorInit = (initialState) => {
//   return {
//     contador: initialState.contador + 100,
//   };
// };

export function contadorReducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { contador: state.contador + 1 };

    case TYPES.DECREMENT:
      return { contador: state.contador - 1 };
      
    case TYPES.RESET:
      return contadorInitialState;
    default:
      return state;
  }
}