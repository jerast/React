import { TodoItem } from "./";

export const TodoList = ({ toDoList, handleDeleteTodo, handleToggleTodo }) => {
	return (
		<ul>
			{toDoList.map((todo) => (
				<TodoItem 
					key={ todo.id } 
					toDo={ todo } 
					handleDeleteTodo={ handleDeleteTodo } 
					handleToggleTodo={ handleToggleTodo }
				/>
			))}
		</ul>
	);
};
