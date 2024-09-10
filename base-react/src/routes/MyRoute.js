import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ element: Element, isClosed, ...rest }) {
  const isLoggedIn = false; // Substitua pela lógica real de autenticação
  const location = useLocation();

  if (isClosed && !isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{ prevPath: location.pathname || '/' }}
        replace
      />
    );
  }

  return <Route {...rest} element={<Element />} />;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isClosed: PropTypes.bool,
};
