export const TodoItem = ({ toDo, handleDeleteTodo, handleToggleTodo }) => {
	return (
		<div className={`list-item ${ toDo.done ? ' done' : '' }`}>
			<span onClick={ () => handleToggleTodo(toDo.id) } >{ toDo.description }</span>
			<button onClick={ () => handleDeleteTodo(toDo.id) }>&times;</button>
		</div>
	);
};
