import TodoApi from "../../api/TodoApi";

export const TODO_SET_LIST_ACTION = 'setList';
export const TODO_CREATE_ACTION = 'create';
export const TODO_REMOVE_ACTION = 'remove';
export const TODO_UPDATE_ACTION = 'update';
export const TODO_EDIT_ACTION = 'edit';
export const TODO_TOGGLE_STATUS_ACTION = 'toggleStatus';
export const TODO_LOADING_ACTION = 'loading';

export function getList () {
  return (dispatch) => {
    dispatch(isLoading());

    TodoApi
      .getList()
      .then(list => {
        dispatch(setList(list))}
      )
  }
}

export function setList (list) {
  return { type: TODO_SET_LIST_ACTION, payload: list }
}

export function isLoading () {
  return { type: TODO_LOADING_ACTION, payload: true }
}

export function save (todo) {
  return (dispatch) => {
    dispatch(isLoading());

    if(todo.id) {
      TodoApi
        .update(todo.id, todo)
        .then(() => {dispatch(update(todo))})
    } else {
      TodoApi
        .create(todo)
        .then(newTodo => {dispatch(create(newTodo))})
    }
  }
}

export function deleteTodo(id) {
  return (dispatch) => {
    dispatch(isLoading());

    TodoApi
      .delete(id)
      .then(() => {
        dispatch(remove(id));
      })
  }
}

export function toggleTodoStatus(todo) {
  return (dispatch) => {
    dispatch(isLoading());
    TodoApi
      .update(todo.id, {...todo, done: !todo.done})
      .then(() => {dispatch(toggleStatus(todo))});
  }
}

export default function update (todo) {
  return { type: TODO_UPDATE_ACTION, payload: todo }
}

export function create (todo) {
  return { type: TODO_CREATE_ACTION, payload: todo }
}
export function remove (id) {
  return { type: TODO_REMOVE_ACTION, payload: id }
}
export function edit (todo) {
  return { type: TODO_EDIT_ACTION, payload: todo }
}
export function toggleStatus (todo) {
  return { type: TODO_TOGGLE_STATUS_ACTION, payload: todo }
}
