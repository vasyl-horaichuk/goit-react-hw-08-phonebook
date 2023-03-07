import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return {
        ...state,
        name: action.payload,
      };
    case 'password':
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
}

export const LoginForm = () => {
  const [state, dispatch] = useReducer(reducer, {
    email: '',
    password: '',
  });

  const handleChangeInput = e => {
    dispatch({ type: e.target.name, payload: e.target.value });
    console.log(state);
  };

  return (
    <form action="">
      <label htmlFor="">
        email
        <input onChange={handleChangeInput} name="name" type="email" />
      </label>
      <label htmlFor="">
        password
        <input onChange={handleChangeInput} name="password" type="password" />
      </label>
    </form>
  );
};
