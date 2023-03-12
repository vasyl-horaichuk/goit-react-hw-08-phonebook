import {Helmet} from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <h1>PAGE LOGIN</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
