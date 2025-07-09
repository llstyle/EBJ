import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from '../components/navigation';


export default function Header() {
  const cart = useSelector((state: any) => state.cart.items);
  //const user = useSelector((state: any) => state.user);
  const isAuth = useSelector((state: any) => state.user.isAuth);
  const role = useSelector((state: any) => state.user.user.role);

  return (
    <header>
      <Navigation cartLength={cart?.length || 0} isAuth={isAuth} role={role} />
    </header>
  );
}
