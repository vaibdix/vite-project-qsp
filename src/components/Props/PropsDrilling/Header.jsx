import Cart from './Cart';

const Header = (props) => {
  return (
    <div>
      Header
      <Cart data={props.name} />
    </div>
  );
};
export default Header;
