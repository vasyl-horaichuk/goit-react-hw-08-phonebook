import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return {
        ...state,
        email: action.payload,
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
  const [state, setState] = useReducer(reducer, {
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChangeInput = e => {
    setState({ type: e.target.name, payload: e.target.value });
    console.log(state);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn(state));
    e.currentTarget.reset();
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">
        email
        <input onChange={handleChangeInput} name="name" type="email" />
      </label>
      <label htmlFor="">
        password
        <input onChange={handleChangeInput} name="password" type="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
