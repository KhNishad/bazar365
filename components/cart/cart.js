
import styles from './cart.module.css'

const Cart = ({rightSideNavF}) => {
    return (

       <div>
             <button className={`${styles.cart_btn} cart-animate`} id="cartbtn" onClick={rightSideNavF}> 
                <img src="../img/bazar365-cart-icon.png" style={{width:"30px",height:"30px",marginTop:"5px"}} alt=""/> 
                <span className={`${styles.cart_length} ng-binding`} ng-bind="shoppingCart.length?shoppingCart.length + ' Items' :'0 Item'">0 Item</span> 
                <span className={`${styles.cart_amount} ng-binding`} style={{borderTop:'1px solid #329521' }}ng-bind="shoppingCart.length?'৳ '+ (orderSummary.subTotal+orderSummary.deliveryCharge) :'৳ 0'">৳ 0</span> 
            </button>
       </div>


    )
}
export default Cart ;