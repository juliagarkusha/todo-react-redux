// External deps
import {useDispatch} from "react-redux";

// Internal deps
import Button from "../../ui/Button";
import Checkbox from "../../ui/Fields/Checkbox";
import {deleteTodo, edit, toggleTodoStatus} from "../../../store/actions/todo";

// Local deps
import './TodoItem.scss';

function TodoItem (props) {
  const {
    todo
  } = props;

  const dispatch = useDispatch();

  function onEditButtonClick () {
    dispatch(edit(todo))
  }

  function onRemoveButtonClick () {
    dispatch(deleteTodo(todo.id))
  }

  function onCheckboxChange () {
    dispatch(toggleTodoStatus(todo))
  }

  return(
    <article className="todo__item">
      <Checkbox
        checked={todo.done}
        onCheckboxChange={onCheckboxChange}
      />
      <span
        className={todo.done ? 'todo__item--done' : ''}
      >
        {todo.title}
      </span>
      <Button
        text="Edit"
        isOutlined
        onButtonClick={onEditButtonClick}
      />
      <Button
        text="Remove"
        viewType="danger"
        isOutlined
        onButtonClick={onRemoveButtonClick}
      />
    </article>
  )
}

export default TodoItem;
