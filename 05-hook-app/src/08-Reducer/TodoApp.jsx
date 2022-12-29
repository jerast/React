import { useTodo } from "../hooks";
import { TodoAdd, TodoList } from "./";

export const TodoApp = () => {

   const { 
      todos,
      todosCount,
      pendingTodosCount,
      handleCreateTodo,
      handleDeleteTodo,
      handleToggleTodo 
   } = useTodo();

	return (
		<>
			<h1 className="title">ToDo App: { todosCount }</h1>
			<h1 className="subtitle">Pendings: { pendingTodosCount }</h1>

         <TodoAdd handleCreateTodo={ handleCreateTodo } />
         <TodoList 
            toDoList={ todos } 
            handleDeleteTodo={ handleDeleteTodo } 
            handleToggleTodo={ handleToggleTodo }
         />
		</>
	);
};
