import { useState } from "react";

export const CounterApp = () => {

   const [state, setState] = useState({
      counter1: 10,
      counter2: 15,
      counter3: 20,
   });

   const { counter1, counter2, counter3 } = state;

	return (
		<>
			<h1 className="title" >Counter1: { counter1 }</h1>
			<h1 className="title" >Counter2: { counter2 }</h1>
			<h1 className="title" >Counter3: { counter3 }</h1>
			<button 
            onClick={ () => setState({ 
               ...state,
               counter1: counter1 + 1,
            }) }
            className="button"
         >
            +1
         </button>
		</>
	);
};
