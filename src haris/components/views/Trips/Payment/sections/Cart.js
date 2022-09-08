import React from 'react'

import classes from './Cart.module.css';

const Cart = (props) => {
  return (

            <div className="table-responsive px-4">
                <table className={`table  ${classes.table}`}>
                    <thead>
                        <tr>
                            <th scope="col" >item</th>
                            <th scope="col">Qty.</th>
                            <th scope="col" >price</th>
                        </tr> 
                    </thead>
                    <tbody>
                        <tr>
                            <td className={`${classes.item} px-2`}>
                                <div className="d-flex">

                                    {
                                       props.imgSrc ? <img src=""alt=""/> : <div className={classes["img-holder"]}></div>
                        
                                    }
                                    <div className="ps-2 text-start">
                                        <h2>Silver Package</h2>
                
                                    <div className="d-flex flex-column">
                                        <div className={classes.details}>Sub details</div>
                                        <div className={classes.btn}><button className='mt-auto'>Remove</button></div>
                                    </div>
                                    
                                </div>
                                </div>
                            </td>
                            <td >
                               <p className={classes.qty}><span>x </span>{"1"}</p> 
                            </td>
                            <td className={classes.price} valign="bottom">399 Pkr</td>
                        </tr>
                    </tbody>
                </table>
            </div>

  )
}

export default Cart