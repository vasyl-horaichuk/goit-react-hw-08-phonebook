import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import {
  Form,
  FormLabel,
  FormInput,
  FormButton,
} from '../FormStyle/ContactForm.styled';

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
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn(state));
  };

  return (
    <Form action="" onSubmit={handleSubmit}>
      <FormLabel htmlFor="email">
        email
        <FormInput onChange={handleChangeInput} name="name" type="email" />
      </FormLabel>
      <FormLabel htmlFor="password">
        password
        <FormInput
          onChange={handleChangeInput}
          name="password"
          type="password"
        />
      </FormLabel>
      <FormButton type="submit">Log In</FormButton>
    </Form>
  );
};
