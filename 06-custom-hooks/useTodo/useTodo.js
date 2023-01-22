import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => 
   JSON.parse(localStorage.getItem('todos')) || [];

export const useTodo = () => {

   const [ todos, dispatch ] = useReducer( todoReducer, [], init );

   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
   }, [todos]);

   const todosCount = todos.length;

   const pendingTodosCount = todos.filter(todo => !todo.done).length;
   
   const handleCreateTodo = ( newTodo ) => 
      dispatch({
         type: '[TODO] Add Todo',
         payload: newTodo,
      });

   const handleDeleteTodo = ( id ) => 
      dispatch({
         type: '[TODO] Remove Todo',
         payload: id,
      });
      
   const handleToggleTodo = ( id ) => 
      dispatch({
         type: '[TODO] Toggle Todo',
         payload: id,
      });

	return {
      todos,
      todosCount,
      pendingTodosCount,
      handleCreateTodo,
      handleDeleteTodo,
      handleToggleTodo,
   };
};
