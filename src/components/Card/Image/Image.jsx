import style from './Image.module.css';
import CardImage from '../../../img/card-bg.jpg'; 

const Image = () => (
  <img className={style.img} src={CardImage} alt="" width='840' height='520'/>
);

export default Image;