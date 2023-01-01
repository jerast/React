import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-Reducer/TodoApp";
import { useTodo } from "../../src/hooks";

jest.mock('../../src/hooks/useTodo');

describe('Testing on <TodoApp /> component', () => {

   useTodo.mockReturnValue({
      todos: [
         { id: 1, description: 'Todo #1', done: false },
         { id: 2, description: 'Todo #2', done: true },
      ],
      todosCount: 2,
      pendingTodosCount: 1,
      handleCreateTodo: jest.fn(),
      handleDeleteTodo: jest.fn(),
      handleToggleTodo: jest.fn()
   })

   test('should display the component correctly', () => {
      const { container } = render( <TodoApp /> );

      expect( container ).toMatchSnapshot();
      expect( screen.getByText('Todo #1') ).toBeTruthy();
      expect( screen.getByText('Todo #2') ).toBeTruthy();
      expect( screen.getByRole('textbox') ).toBeTruthy();
   });

})