import { useContext, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from 'context/AuthContext';

export const Sidebar = () => {
  const [password, setPassword] = useState('');
  const location = useLocation();

  const { isAuth, logIn } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    logIn(password);
  };

  if (!isAuth) {
    return (
      <form onSubmit={handleSubmit}>
        <input
          value={password}
          type="text"
          placeholder="password"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" className="btn primary-btn">
          LOGIN
        </button>
      </form>
    );
  }

  return (
    <aside className="nav nav-pills p-5 bg-light w-100" style={{ maxWidth: '300px', height: 'auto' }}>
      <div className="d-flex flex-column" style={{ position: 'sticky', top: 30, left: 0, height: 'max-content' }}>
        <NavLink
          to="/"
          style={{ textAlign: 'left', marginLeft: '-10px' }}
          className={({ isActive }) => (isActive ? 'btn btn-primary' : 'btn btn-light')}
          state={{ from: location }}
        >
          Home page
        </NavLink>
        <NavLink
          to="/posts"
          style={{ textAlign: 'left', marginLeft: '-10px' }}
          className={({ isActive }) => (isActive ? 'btn btn-primary' : 'btn btn-light')}
          state={{ from: location }}
        >
          Posts list
        </NavLink>
        <NavLink
          to="/tasks"
          style={{ textAlign: 'left', marginLeft: '-10px' }}
          className={({ isActive }) => (isActive ? 'btn btn-primary' : 'btn btn-light')}
          state={{ from: location }}
        >
          React exercises
        </NavLink>
      </div>
    </aside>
  );
};
