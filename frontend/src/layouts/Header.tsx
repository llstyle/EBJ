import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from '../components/navigation.tsx';


export default function Header() {
  const cart = useSelector((state: any) => state.cart.items);
  const isAuth = useSelector((state: any) => state.user.isAuth);

  return (
    <header>
      <Navigation cartLength={cart?.length || 0} isAuth={isAuth} />
    </header>
  );
}
