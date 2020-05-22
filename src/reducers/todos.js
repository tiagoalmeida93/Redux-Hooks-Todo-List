const INITIAL_STATE = [];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO_SUCCESS":
      return [
        ...state,
        {
          id: Math.random(),
          text: action.payload.text,
        },
      ];
    default:
      return state;
  }
}
