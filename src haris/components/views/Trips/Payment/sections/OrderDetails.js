import classes from './OrderDetails.module.css';



const OrderDetails = (props)=>{
    const packageValue = props.packageDetails 
    return (
        <>
        <div className='px-3 py-2'>
            <div className={`d-flex justify-content-between pb-4 ${classes.orderPrice}`}>
                <h2>{packageValue.packageName}</h2>
                <h2 style={{fontWeight:'700'}}>30,000</h2>
            </div>
            {
                packageValue.packageDetail.map((item)=>(
                    <div className={`d-flex align-items-center px-2 ${classes.orderDetails}`}>
                        <h4>{item.itemName}</h4>
                        <div className={classes.divider}></div>
                        <p>{item.price}</p>
                    </div>

                ))
            }
        </div>
            
        </>
    )
}

export default OrderDetails;