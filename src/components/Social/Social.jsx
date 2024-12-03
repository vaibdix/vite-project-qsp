import './Social.styles.css';
import facebook from '../../assets/facebook.jpg';
import insta from '../../assets/insta.jpg';
import twitter from '../../assets/twitter.jpg';
import whatsapp from '../../assets/whatsapp.jpg';

const Social = () => {
  return (
    <div className="social">
      <div className="social-icons">
        <a href="#" className="social-icon">
          <img src={twitter} alt="Twitter" />
        </a>
        <a href="#" className="social-icon">
          <img src={whatsapp} alt="WhatsApp" />
        </a>
      </div>
      <div className="social-icons">
        <a href="#" className="social-icon">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="#" className="social-icon">
          <img src={insta} alt="Instagram" />
        </a>
      </div>
    </div>
  );
};

export default Social;
