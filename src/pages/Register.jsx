import { RegisterForm } from 'components/RegisterFrom/RegisterForm';
import {Helmet} from 'react-helmet';

const RegisterPage = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <h1>PAGE REGISTER</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
