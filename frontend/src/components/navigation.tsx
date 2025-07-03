import { Link } from 'react-router-dom';

interface Props {
  cartLength: number;
  isAuth: boolean;
}

export default function Navigation({ cartLength, isAuth }: Props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">EBJ</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Головна</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Товари</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Кошик ({cartLength})</Link>
            </li>
            <li className="nav-item">
              {isAuth ? (
                <Link className="nav-link" to="/profile">Профіль</Link>
              ) : (
                <Link className="nav-link" to="/login">Увійти</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
