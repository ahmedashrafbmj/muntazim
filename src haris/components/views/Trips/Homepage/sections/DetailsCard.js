import classes from './DetailsCard.module.css'


const DetailsCard = (props)=>{
    console.log(props)
    return(
        <div className="container-lg">
            <div className="row justify-content-center align-items-center ms-sm-1">
                {
                    props.CardValues.map((item)=>(
                        <div className={`col-4 mx-lg-4 mx-sm-2 mx-1 my-2 ${classes.Card}`}>
                            <img src={item.img} alt=""/>
                            <h2>{item.label}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DetailsCard;