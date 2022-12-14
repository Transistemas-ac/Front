//import cardImage from '../media/svg/carousel-image-0.svg'; // gives image path

//<img className="card__image" src={cardImage} />
function Card(props) {
    return (
        <div className="card">
            <img className="card__image" src={props.img} />

            <h2 className="card__title">{props.title}</h2>

            <p className="card__description">{props.description}</p>

            <a className="card__link" href="#">{props.link}</a>
        </div>
    );
}

export default Card;



