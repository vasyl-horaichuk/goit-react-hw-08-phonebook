import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
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
        name: action.payload,
      };
    case 'email':
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

export const RegisterForm = () => {
  const [state, setState] = useReducer(reducer, {
    name: '',
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
    dispatch(register(state));
  };

  return (
    <Form autoComplete="off" action="" onSubmit={handleSubmit}>
      <FormLabel htmlFor="name">
        Name
        <FormInput onChange={handleChangeInput} name="name" type="text" />
      </FormLabel>
      <FormLabel htmlFor="email">
        email
        <FormInput onChange={handleChangeInput} name="email" type="email" />
      </FormLabel>
      <FormLabel htmlFor="password">
        password
        <FormInput
          onChange={handleChangeInput}
          name="password"
          type="password"
        />
      </FormLabel>
      <FormButton type="submit">Register</FormButton>
    </Form>
  );
};
