import { useGetTodoQuery, useGetTodosQuery } from "@/api"
import { useState } from "react";

export const TodoApp = () => {
   // const { data: todos = [], isLoading } = useGetTodosQuery();
   const [ todoId, setTodoId ] = useState( 1 );
   const { data: todo, isLoading } = useGetTodoQuery( todoId );

   const nextTodo = () => setTodoId( todoId + 1 );
   const prevTodo = () => setTodoId( (todoId > 1) ? todoId - 1 : todoId );

   return (
      <>
         <h1>TodoApp - RTK Query</h1>
         <hr />

         <h4>isLoadding: { isLoading ? 'True' : 'False' }</h4>

         {/* <ul>
            { 
               todos.map( ({ title, id, completed }) => 
               <li key={ id }>
               <strong  style={{ width: '100px', display: 'inline-block' }}>{ completed ? 'DONE' : 'Pending' }</strong>
               <span>{ title }</span>
               </li> 
               )
            }
         </ul> */}

         <pre>{ JSON.stringify( todo ) }</pre>

         <button onClick={ prevTodo } disabled={ (todoId === 1) }>
            Prev Todo
         </button>
         <button onClick={ nextTodo }>
            Next Todo
         </button>
      </>
   )
}