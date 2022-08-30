import Felicitation from './Felicitation/Felicitation';
import Image from './Image/Image';
import style from './Card.module.css';

const Card = () => (
  <div className={style.card}>
    <div className={style.wrapper}>
      <div className={style.image}>        
        <Image />    
        <Felicitation />        
      </div>
    </div>
  </div>
);

export default Card;