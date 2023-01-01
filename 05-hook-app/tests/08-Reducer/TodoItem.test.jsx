import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-Reducer";

describe('Testing on <TodoItem /> component', () => {

   const todo = {
      id: 1, 
      description: 'Demo todo',
      done: false,
   }

   const handleDeleteTodoMock = jest.fn();
   const handleToggleTodoMock = jest.fn();

   beforeEach( () => jest.clearAllMocks() );

   test('should display the pending Todo', () => { 
      render( 
         <TodoItem 
            toDo={ todo } 
            handleDeleteTodo={ handleDeleteTodoMock } 
            handleToggleTodo={ handleToggleTodoMock } 
         /> 
      );

      expect( screen.getByRole('listitem').className ).not.toContain('done');
      expect( screen.getByRole('span').innerHTML ).toBe( todo.description );
   });

   test('should display the completed Todo', () => { 
      todo.done = true;

      render( 
         <TodoItem 
            toDo={ todo } 
            handleDeleteTodo={ handleDeleteTodoMock } 
            handleToggleTodo={ handleToggleTodoMock } 
         /> 
      );

      expect( screen.getByRole('listitem').className ).toContain('done');
      expect( screen.getByRole('span').innerHTML ).toBe( todo.description );
   });

   test('should call ToogleTodo function when click the <span> element', () => {
      render( 
         <TodoItem 
            toDo={ todo } 
            handleDeleteTodo={ handleDeleteTodoMock } 
            handleToggleTodo={ handleToggleTodoMock } 
         /> 
      );

      const spanItem = screen.getByRole('span');
      fireEvent.click( spanItem );

      expect( handleToggleTodoMock ).toHaveBeenCalledWith( todo.id );
   });

   test('should call DeleteTodo function when click the <button> element', () => {
      render( 
         <TodoItem 
            toDo={ todo } 
            handleDeleteTodo={ handleDeleteTodoMock } 
            handleToggleTodo={ handleToggleTodoMock } 
         /> 
      );

      const buttonItem = screen.getByRole('button');
      fireEvent.click( buttonItem );

      expect( handleDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
   });

});