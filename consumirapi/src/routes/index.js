// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import Login from '../pages/login';
// import Aluno from '../pages/aluno';
// import Alunos from '../pages/alunos';
// import Fotos from '../pages/fotos';
// import Register from '../pages/register';
// import Page404 from '../pages/Page404';

// export default function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Alunos />} isClosed={false} />
//       <Route path="/aluno/:id/edit" element={<Aluno />} isClosed={true} />
//       <Route path="/aluno/" element={<Aluno />} isClosed={true} />
//       <Route path="/fotos/:id" element={<Fotos />} isClosed />
//       <Route path="/login/" element={<Login />} isClosed={false} />
//       <Route path="/register/" element={<Register />} isClosed={false} />
//       <Route path="*" element={<Page404 />} />
//     </Routes>
//   );
// }
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from '../pages/login';
import Aluno from '../pages/aluno';
import Alunos from '../pages/alunos';
import Fotos from '../pages/fotos';
import Register from '../pages/register';
import Page404 from '../pages/Page404';

function AppRoutes() {
  const isAuthenticated = () => {
    // Lógica para verificar se o usuário está autenticado
    return !!localStorage.getItem('token');
  };

  function PrivateRoute({ element, isClosed }) {
    if (isClosed && !isAuthenticated()) {
      return <Navigate to="/login" />;
    }
    return element;
  }

  return (
    <Routes>
      <Route path="/" element={<Alunos />} isClosed={false} />
      <Route path="/aluno/:id/edit" element={<PrivateRoute element={<Aluno />} isClosed />} />
      <Route path="/aluno/" element={<PrivateRoute element={<Aluno />} isClosed />} />
      <Route path="/fotos/:id" element={<PrivateRoute element={<Fotos />} isClosed />} />
      <Route path="/login/" element={<Login />} isClosed={false} />
      <Route path="/register/" element={<Register />} isClosed={false} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default AppRoutes;
