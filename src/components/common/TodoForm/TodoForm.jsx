// External deps
import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

// Internal deps
import Input from "../../ui/Fields/Input";
import {create} from "../../../store/actions/todo";

// Local deps
import "./TodoForm.scss";

function TodoForm () {
  const dispatch = useDispatch();
  const [ inputValue, setInputValue ] = useState('');
  const editableTodo = useSelector(state => state.todo.editTodo);
  const title = editableTodo?.title ?? '';
  useEffect(() => {
    if(!editableTodo) {
      return;
    }

    setInputValue(editableTodo?.title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  function onInputChange ({ target }) {
    setInputValue(target.value);
  }

  function onTodoFormSubmit (event) {
    event.preventDefault();

    if(!inputValue) {
      return;
    }

    dispatch(create({...editableTodo, title: inputValue}))
    setInputValue('');
  }

  return(
    <form onSubmit={onTodoFormSubmit} className="todoForm">
      <Input
        name="title"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Enter todo"
        labelText="Enter todo"
        className="todoForm__input"
      />
    </form>
  )
}

export default TodoForm;
