import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn ? (
        <Link to="/contacts">Tasks</Link>
      ) : (
        <>
          <Link to="/login">login</Link>
          <Link to="/register">register</Link>
        </>
      )}
    </nav>
  );
};
