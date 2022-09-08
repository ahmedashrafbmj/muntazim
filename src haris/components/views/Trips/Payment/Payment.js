import classes from './Payment.module.css'
import PaymentForm from './sections/PaymentForm';
import OrderDetails from './sections/OrderDetails';
import Cart from './sections/Cart';

const PaymentFormFields=[
    { id:1, type:"Credit Card",
    formFields:[
        {label:"Card Number",type:"tel"},
        {label:"CVC Code",type:"text"},
        {label:"Expiry Date",type:"text"},
        {label:"Name On Card",type:"text"},
    ]},
]

const PackageData=[
    {
        id:'1',
        packageName:"Customized Packages",
        packageDetail:[{id:1,itemName:"Vehicle",price:"5,000"},
                        {id:2,itemName:"Hotel",price:"5,000"},
                        {id:3,itemName:"Trip to naran",price:"10,000"},
                        {id:4,itemName:"Extras",price:"10,000"},

        ],
        total:"30,000",

    }
]

const Payment = ()=>{
    return (
        <>
            <div className="container-xxl my-5">
                <div className='row justify-content-center mx-1 mx-lg-0'>
                    <div className={`col-lg-6 col-md-10  p-1 mx-2 mx-lg-0`}>
                        <p className={classes.headingCard}>Choose Your Payment Method</p>
                        <div className={`me-lg-4 ${classes.card}`} style={{backgroundColor:"#EFEAEE"}}>
                            {/* <PaymentForm fields={PaymentFormFields}/> */}
                            <h2 className={`text-center pt-2 ${classes.h2Purple}`}>CART</h2>
                            <Cart/>
                        </div>
                        
                    </div>
                    <div className={`col-lg-5 col-md-10  pb-3 p-1 mx-2 mx-lg-0`}>
                        <p className={classes.headingCard}>Summary/Order details</p>
                        <div className={`me-lg-4 me-lg-0 ${classes.card}`}>
                            <OrderDetails packageDetails={PackageData[0]}/>
                        </div>
                        <div className={`${classes.totalStyle} px-4 pt-4 me-4 me-lg-0`}>
                            <p>Got a discount Coupon?</p>
                            <div className={`d-flex align-items-center pt-3`}>
                                <h2>Total</h2>
                                <div className={classes.divider}></div>
                                <h2>{PackageData[0].total}</h2>
                            </div>
                        </div>
                        <button className={`float-end mt-5 mb-3  me-4 me-lg-0  ${classes.btn}`}>Complete Order</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Payment;