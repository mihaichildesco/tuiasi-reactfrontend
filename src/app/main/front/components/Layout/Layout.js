import Navbar from '../Navbar/Navbar';
import './Layout.css';

function Layout(props) {
  return (
    <div>
      <Navbar />
      <div>{props.children}</div>
    </div>
  );
}

export default Layout;
