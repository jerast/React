export const TodoItem = ({ toDo, handleDeleteTodo, handleToggleTodo }) => {
	return (
		<div 
			className={`list-item ${ toDo.done ? ' done' : '' }`} 
			role="listitem"
		>
			<span 
				onClick={ () => handleToggleTodo(toDo.id) }
				role="span" 
			>
				{ toDo.description }
			</span>
			<button 
				onClick={ () => handleDeleteTodo(toDo.id) }
			>
				&times;
			</button>
		</div>
	);
};
