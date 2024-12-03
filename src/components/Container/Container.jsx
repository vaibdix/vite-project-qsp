import './Container.styles.css';
import Join from '../Join/Join';
import Image from '../Image/Image';
import Blue from '../Blue/Blue';
import Yellow from '../Yellow/Yellow';
import Social from '../Social/Social';
import Webinar from '../Webinar/Webinar';

const Container = () => {
  return (
    <div className="container">
      <Join />
      <Image />
      <Blue />
      <Yellow />
      <Social />
      <Webinar />
    </div>
  );
};
export default Container;
