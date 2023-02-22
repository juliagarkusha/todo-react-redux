import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../../store/actions/todo";
import TodoItem from "../TodoItem";

import "./TodoList.scss";

function TodoList () {
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todo.list);
  const isLoading = useSelector(state => state.todo.loading);

  useEffect(() => {
    dispatch(getList())
  }, [dispatch])

  function getLoadingText () {
    return isLoading ? 'loading...' : '';
  }

  return (
    <div className="todo__list">
      <h1>{`Todo list ${getLoadingText()}`}</h1>
      {todoList.map(todoItem => (
        <TodoItem
          key={todoItem.id}
          todo={todoItem}
        />
      ))}
    </div>
  )
}

export default TodoList;


