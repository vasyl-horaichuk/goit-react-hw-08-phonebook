import {Helmet} from 'react-helmet';
import { RegisterForm } from 'components/RegisterFrom/RegisterForm';

const RegisterPage = () => {
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <h1>PAGE REGISTER</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
