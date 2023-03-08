// import { Link, Outlet } from 'react-router-dom';
// import { useAuth } from 'hooks';
// import { Suspense } from 'react';

// export const Navigation = () => {
//   const { isLoggedIn } = useAuth();

//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       {isLoggedIn ?
//         <Link to="/contacts">Contacts</Link>}
//       <Suspense>
//         <Outlet />
//       </Suspense>
//     </nav>
//   );
// };

import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};
