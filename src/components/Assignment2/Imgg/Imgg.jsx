// import pImage from "../../assets/p.png";
import pImage from '../../../assets/p.png';
import './Imgg.css';

const Imgg = () => {
  return (
    <div className="img-container">
      <img src={pImage} alt="Description of the image" className="img-class" />
    </div>
  );
};

export default Imgg;
