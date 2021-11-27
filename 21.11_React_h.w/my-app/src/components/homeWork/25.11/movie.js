import * as style from './Movie.module.css'


export default function movie(props) {
    return (
        <div className={style.card}>
        <p>{props.movieObj.name}</p>
        <p>{props.movieObj.resalesDate}</p>
        <p>{props.movieObj.mainActor}</p>
      </div>
    )
}
