import WrapperRadius from "../../UI/WrapperRadius";
import classes from './TripCard.module.css';


const TripCard = (props)=>{
    return(
        <div className={`card ${classes.card}`} style={{maxWidth:"14rem"}}>
            <WrapperRadius className={classes.cardImg}><img className="card-img-top" src={props.data.image} alt="Trip"/></WrapperRadius>
            <div className="card-body pb-0 mb-0 ps-1 ms-1">
                <h4 className="card-title"><i className="fa fa-map-marker" aria-hidden="true"></i> {props.data.PlaceName} </h4>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Arrival <p>{props.data.Arrival}</p></li>
                <li className="list-group-item">Departure <p>{props.data.Departure}</p> </li>
            </ul>
        </div>
    )
}

export default TripCard;