import * as style from './Car.module.css'

export default function Car(props) {
  return (
    <div className={style.card}>
      <p>{props.carObj.module}</p>
      <p>{props.carObj.price}$</p>
      <img src={props.carObj.img} alt="" />
    </div>
  );
}
