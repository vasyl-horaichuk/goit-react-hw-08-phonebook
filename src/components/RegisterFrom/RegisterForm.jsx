import { useReducer } from 'react';

export const LoginForm = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    email: '',
    password: '',
  });
  return (
    <form action="">
      <label htmlFor="">
        Name
        <input type="text" />
      </label>
      <label htmlFor="">
        email
        <input type="email" />
      </label>
      <label htmlFor="">
        password
        <input type="password" />
      </label>
    </form>
  );
};
