import './Image.styles.css';
import imageFile from '../../assets/portrait.png';

const Image = () => {
  return (
    <div className="image-container">
      <img src={imageFile} alt="description" />
    </div>
  );
};

export default Image;
