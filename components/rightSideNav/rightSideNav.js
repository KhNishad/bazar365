import styles  from './rightSideNav.module.css';
import Modal from  'react-modal';
import CartModal from '../CartModal/CartModal';
import react ,{useState} from 'react';



const RightSideNav = ({rightMargin, rightSideNavF}) =>{
    const [isOpen, setIsOpen] = useState(false)

    return (

    <div>
          {
              isOpen?
                 <CartModal setIsOpen={setIsOpen}/>
                 :null
          }
           
        


        <div id="rightsidebar" className={`${rightMargin ? styles.navMargin : styles.noNavMargin} ${styles.right_sidebar} ${styles.right_sidebar_active} `}> 
        <div className={styles.addToCart} ng-clock="">
             <div className={styles.cartList}> 
                 <div className={styles.cartHeader}> 
                     <span className={`${styles.cartQuantity} ${styles.right_cart_qty}`}>
                          <img src="../img/bazar365-cart-icon.png" alt="cart"/>
                           <span ng-bind="shoppingCart.length" style={{margin:'3px'}} className="ng-binding">0</span> 
                           <span ng-bind="shoppingCart.length &amp;&amp; shoppingCart.length>1?'Items':'Item'" className="ng-binding">Item</span>
                     </span> 
                          <button id={styles.cartCloseBtn} className="btn" onClick={rightSideNavF}>Close</button>
                          </div>
                          <div className={styles.deliveryCost}>
                               <span>Approximate delivery charge</span>
                                <span className="pull-right ng-binding" ng-clock="">৳ &nbsp;39&nbsp; 
                                <a data-toggle="modal" data-target="#deliveryChargeModal" onClick={()=> setIsOpen(true)}> 
                                    <i className="fa fa-question-circle"></i> 
                                </a>
                             </span> 
                            </div>
                        </div>
                        <div className={styles.addToCart_item}>
                             <div style={{width:"100%"}}>
                                 <table className="table table-sm">
                                     
                                    
                                    <tbody/>
                                        {/* <!-- ngRepeat: x in shoppingCart track by $index --></tbody> */}
                                </table> 
                            </div>
                            <div> 
                                {/* <!-- ngIf: shoppingCart.length==0 --> */}
                                <p className={` ${styles.emptyshoopingcarttext} ng-scope`} ng-if="shoppingCart.length==0">Empty Shopping Cart<br/>Please Add product</p>
                                {/* <!-- end ngIf: shoppingCart.length==0 --><!-- ngIf: !shoppingCart --> */}
                            </div>
                        </div>
                        <div className={styles.doctor} ng-hide="hideOrderNowButton">
                             <div style={{padding: "10px"}}>
                                 <button className={styles.ordernowbtn} ng-click="goShoppingCart()">
                                     <div className={styles.btn_1}>Place order</div>
                                     <div className={`${styles.btn_2} ng-binding`} ng-bind="shoppingCart.length?'৳ '+ (orderSummary.subTotal+orderSummary.deliveryCharge) :'৳ 0'">৳ 0</div>
                                    </button> 
                                </div>
                            </div>
                        </div> 
                    </div>
    </div>

    )
}
export default RightSideNav;