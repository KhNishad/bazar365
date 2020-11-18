
import react ,{useState} from 'react';
import Modal from  'react-modal';
import RegModal from '../RegisterModal/RegisterModal';
import LoginModal from '../LoginModal/LoginModal';
import styles from  './Navbar.module.css';
import CartModal from '../CartModal/CartModal';



Modal.setAppElement('#__next');

const Navbar = ({leftSideNavF}) => {
 
     const [isOpen, setIsOpen] = useState(false)
     const [isRegOpen, setRegOpen] = useState(false)
     const [isLogin, setisLogin] = useState(false)
     
    return (
                
    <div>
        

                  {
                      isRegOpen?
                       <RegModal setRegOpen = {setRegOpen}/>
                       :null
                  }
                        
                    {
                        isOpen?
                        <LoginModal setIsOpen = {setIsOpen}/>
                        :null
                    }

                    
                     
                    
                    <div className={`${styles.main_navigation_bar} ${styles.sticky}`}>
                    <div className={`container-fluid ${styles.topbarsticky}`}>
                        <nav className={` navbar ${styles.nav} ${styles.sticky_navbar}`} role="navigation" >
                            {/* {/ <!-- Brand logo --> /} */}
                            
                            <div className={styles.navbar_header} style={{width:"20%;"}}>
                                <a className={styles.navTglr_stickyBar} onClick = {leftSideNavF} id="btnToggleLeft">
                                    <span className="fa fa-bars fa-lg" style={{color:'white'}}></span>
                                </a>

                                <a href="/" className={styles.stickyLogo} target="_self"><img src="/img/bazar365-logo.png" alt="logo"/></a>
                            </div>
                            <div className={styles.topbar_header_right} style={{width:"80%;"}}>
                                <ul className={styles.header_login} style={{width:"100%;", marginRight: '35px;'}}>

                                    {/* {/ <!-- Product Search Box --> /} */}
                                    <li className={styles.ee_top_search_box} style={{width:"55%;"}}>
                                        <form className={styles.navbar_form}role="search" >
                                            <div className={`input-group ${styles.stickey_searchbox}`}>
                                                <input type="text" className={`${styles.form_control} ${styles.ee_stickyform}` }id="scrollNavigationSearchBox" placeholder="Search for products (e.g. rice, dal)" ng-model="productName"/>
                                                <span className={`btn ${styles.input_group_addon}`} aria-hidden="true"><i className="fa fa-search" aria-hidden="true"></i></span>
                                            </div>
                                        </form>
                                    </li> 

                                    {/* {/ <!-- Contact Info --> /} */}
                                    <li className={styles.top_phone} style={{}}>
                                        <a href="https://api.whatsapp.com/send/?phone=+8801842088300" style={{fontWeight: "700px;"}}>
                                            <img src="/img/whatsapp-icon.png" alt="" style={{width: "25px;"}}/>
                                        </a>
                                    </li>
                                    
                                    {/* {/ <!-- Contact Info --> /} */}
                                    <li className={styles.top_phone}>
                                        <i className="fa fa-phone"></i>
                                        <a href="tel:+8809642446688" style={{fontWeight: "700;"}}>09642446688</a>
                                    </li>
                                    
                                  
                                    
                                    {/* <!-- dropdown --> */}


                                    {
                                        isLogin?
                                        <li>       
                                            <div className={`btn-group ${styles.navDropDown}`} style={{cursor: "pointer;",verticalAlign: "unset"}} 
                                                role="group" ng-show="auth.isAuthenticated()">
                                            <a  id="btnGroupDrop1"  className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span>
                                                        <span>Nishad</span>
                                                        <span ></span>
                                                    </span>
                                                    <span ng-if="!currentUser.first_name && !currentUser.last_name && currentUser.email">
                                                        <span ng-bind="currentUser.email"></span> 
                                                    </span>
                                                    <span >
                                                        <span ng-bind="currentUser._phone"></span>
                                                    </span>
                                                </a>
                                                <div className="dropdown-menu" style={{left:'-50px',top:'33px'}} aria-labelledby="btnGroupDrop1">
                                                    <a className="dropdown-item" href="/myaccount" target="_self">
                                                        My Profile
                                                    </a>
                                                    <a className="dropdown-item" href="/myaccount/orders" target="_self">
                                                        My Orders
                                                    </a>
                                                    <a className="dropdown-item" ng-click="logout()">
                                                        Logout
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                     :
                                     <span className={styles.loginbtn}>
                                            {/* {/ <!-- Login --> / */}
                                            <li ng-hide="" className="dropdown top-dropdown-color topbar-login">
                                                <a  onClick= {()=> setIsOpen(true)} >Login</a>
                                            </li>
                                            
                                            <li className="dropdown top-dropdown-color topbar-login">
                                                <a  onClick={()=> setRegOpen(true)} style={{color: "#000;"}} target="_self">Register</a>
                                            </li>
                                     </span> 
                                

                                    
                                    }
                                 
                                </ul>
                            </div>
                           
                        </nav>
                    </div>
                </div>

                {/* mobile Nav */}

    <div className={styles.top_bar_wrapper} id={styles.dvcMbl}> 
      <div className={`container-fluid ${styles.sticky_mobile_topbar}`}> 
          <ul className={`nav ${styles.navbar_nav} navbar-right ${styles.top_login}`} style={{width: "100%"}}> 
            <li className={`dropdown ${styles.topbar_toggle} ${styles.top_bar_dropdown_menu} ${styles.ee_khsandwishmenu}`}>
                 <a href="" data-toggle="dropdown" className="dropdown-toggle" style={{padding: "0px"}}>
                    <i className="fa fa-bars" aria-hidden="true">

                    </i>
                </a>
                 <ul className={`dropdown-menu ${styles.topdropdowntoggle}` }style={{right: "0"}}> 
                    <li>
                         <a className="text-center" href="/" target="_self">Home</a> 
                        </li>
                        <li>
                             <a className="text-center" href="/about" target="_self">About Us</a> 
                            </li>
                            <li className={styles.menu_item_right}> 
                                <a className="text-center" href="/contact" target="_self">Contact</a> 
                            </li>
                            <li className={`${styles.topdropdowntoggleitem} ${styles.ee_khmlog}`}>
                                 <a className="text-center" ng-hide="auth.isAuthenticated()" ng-click="openLoginModal()">Login</a>
                                 </li>
                                 <li ng-show="auth.isAuthenticated()" className={`${styles.topdropdowntoggleitem} ${styles.ee_khmlog}`} style={{borderTop:"none"}}> 
                                    <a className="text-center" href="/myaccount" target="_self">My Profile</a>
                                 </li>
                                 <li ng-show="auth.isAuthenticated()" className={`${styles.topdropdowntoggleitem} ${styles.ee_khmlog}`}> 
                                     <a className="text-center" href="/myaccount/orders" target="_self">My Orders</a> 
                                    </li>
                                    <li ng-show="auth.isAuthenticated()" className={`${styles.topdropdowntoggleitem} ${styles.ee_khmlog}`}>
                                         <a className="text-center" ng-click="logout()">Logout</a>
                                         </li>
                                        </ul> 
                                    </li>
                                    <li style={{order: "97", padding: "0px", color: "#7ca739",marginRight: "4px"}}> 
                                        <a href="https://api.whatsapp.com/send/?phone=+8801842088300">
                                             <img src="../img/whatsapp-icon.png" alt="" className={styles.wh_icon_mobile}/>
                                             </a>
                                             </li>
                                             <li onclick="window.open('tel:09642446688');" style={{order: "98", fontSize: "30px", padding: "0px",marginRight: "-4px", color: "#7ca739"}}> 
                                                <i className="fa fa-phone-square"></i>
                                             </li>
                                             <li className={`${styles.top_bar_logo} ${styles.ee_khmlogo}`} style={{width:"10%"}}>
                                                 <a href="/" className={styles.ee_phStickyLogo} style={{padding: "0px", marginLeft:"-10px"}} target="_self">
                                                     <img src="../img/bazar365-logo.png" alt="logo"/> 
                                                    </a> 
                                                </li>
                                                <li className={`${styles.ee_khsearchbox} ${styles.hdrRgt}`}> 
                                                    <form className={styles.navbar_form} role="search">
                                                         <div className={`${styles.input_group} ${styles.stickey_searchbox}`} >
                                                             <input type="text" className={`form-control ${styles.ee_stickyform}`}id="scrollNavigationSearchBox" placeholder="Search products (e.g. rice)" ng-model="productName"/>
                                                              <span className={`btn ${styles.input_group_addon}`  }aria-hidden="true" onclick="searchProduct()">
                                                                <i className="fa fa-search" aria-hidden="true"></i>
                                                            </span>
                                                         </div>
                                                        </form>
                                                     </li>
                                                     <li className="top-bar-phone ee_khd"> 
                                                         <i className="fa fa-phone topbarphnicon">

                                                         </i>
                                                          <span>+880-2-8831440</span>
                                                         </li>
                                                         <li className="top-bar-add-to-cart">
                                                              <div className="order_now ee_placeOrderforMob"> 
                                                                  <div id="ee_sandWichMenuCategory">
                                                                      <span>

                                                                      </span>
                                                                    </div>
                                                                    {/* <!-- ngIf: !isCheckoutPage --> */}
                                                                    <a ng-if="!isCheckoutPage" className="btn btn-success mobile-go-shopingcart ng-scope" ng-click="goShoppingCart()" style={{fontSize: "20px",width: "65%"}}/> ORDER NOW <span className="glyphicon glyphicon-menu-right" aria-hidden="true">

                                                                    </span> 
                                                                {/* </a><!-- end ngIf: !isCheckoutPage --> */}
                                                                 <a id="mobileCartBtn" className="cart-animate" style={{position: "relative",marginRight: "10px"}}> 
                                                                    <img className="itemtopbar" src="/assets/images/bazar365-cart-icon-white.png" style={{width: "45px",height: "45px",padding: "0px",margin: "0"}} alt="cart"/>
                                                                     <div id="item-count">
                                                                         <div ng-bind="shoppingCart.length?shoppingCart.length:'0'" className="ng-binding">5</div>
                                                                        </div>
                                                                    </a> 
                                                                </div>
                                                                <span className="quantityshowmbl ng-binding">5<img ng-click="CartsWidget()" src="/assets/images/bazar365-cart-icon.png" style={{width:"30px",height:"30px",marginTop: "5px"}} alt=""/>
                                                                </span>
                                                              </li>
                                                        </ul>
                                                 </div>
                                             </div>













               
  


               
  
        
  
     </div>

)};

 export default Navbar;