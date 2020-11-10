
import react ,{useState} from 'react';
import Modal from  'react-modal';
import RegModal from '../../components/registerModal';
import LoginModal from '../../components/loginModal';
import styles from  './Navbar.module.css'



Modal.setAppElement('#__next');

const Navbar = () => {
 
     const [isOpen, setIsOpen] = useState(false)
     const [isRegOpen, setRegOpen] = useState(false)
     const [isLogin, setisLogin] = useState(false)

    return (
                
    <div>
        

                    <Modal isOpen = {isRegOpen} className="register_modal"  >
                         <RegModal setRegOpen = {setRegOpen}/>
                    </Modal>



                     <Modal className='login_modal' isOpen={isOpen}>
                        <LoginModal setIsOpen = {setIsOpen}/>
                     </Modal>
                     
                    
                    <div className={`${styles.main_navigation_bar} ${styles.sticky}`}>
                    <div className={`container-fluid ${styles.topbarsticky}`}>
                        <nav className={`navbar ${styles.sticky_navbar}`} role="navigation" >
                            {/* <!-- Brand logo --> */}
                            
                            <div className={styles.navbar_header} style={{width:"20%;"}}>
                                <a className={styles.navTglr_stickyBar} id="btnToggleLeft">
                                    <span className="fa fa-bars fa-lg"></span>
                                </a>
                                <a href="/" className={styles.stickyLogo} target="_self"><img src="/img/bazar365-logo.png" alt="logo"/></a>
                            </div>
                            <div className={styles.topbar_header_right} style={{width:"80%;",paddingRight:'40px'}}>
                                <ul className={styles.header_login} style={{width:"100%;"}}>

                                    {/* <!-- Product Search Box --> */}
                                    <li className={styles.ee_top_search_box} style={{width:"55%;"}}>
                                        <form className={styles.navbar_form}role="search" >
                                            <div className={`${styles.input_group} ${styles.stickey_searchbox}`}>
                                                <input type="text" className={`${styles.form_control} ${styles.ee_stickyform}` }id="scrollNavigationSearchBox" placeholder="Search for products (e.g. rice, dal)" ng-model="productName"/>
                                                <span className={`btn ${styles.input_group_addon}`} aria-hidden="true"><i className="fa fa-search" aria-hidden="true"></i></span>
                                            </div>
                                        </form>
                                    </li> 

                                    {/* <!-- Contact Info --> */}
                                    <li className={styles.top_phone} style={{}}>
                                        <a href="https://api.whatsapp.com/send/?phone=+8801842088300" style={{fontWeight: "700px;"}}>
                                            <img src="/img/whatsapp-icon.png" alt="" style={{width: "25px;"}}/>
                                        </a>
                                    </li>
                                    
                                    {/* <!-- Contact Info --> */}
                                    <li className={styles.top_phone}>
                                        <i className="fa fa-phone"></i>
                                        <a href="tel:+8809642446688" style={{fontWeight: "700;"}}>09642446688</a>
                                    </li>
                                    
                                    {/* <!-- Login --> */}
                                    <li ng-hide="" className="dropdown top-dropdown-color topbar-login">
                                        <a className={styles.loginbtn}  onClick= {()=> setIsOpen(true)}  style={{color:"#000" }}>Login</a>
                                    </li>
                                    
                                    <li className="dropdown top-dropdown-color">
                                        <a  onClick={()=> setRegOpen(true)} style={{color: "#000;"}} target="_self">Register</a>
                                    </li>
                                    
                                    {/* <!-- dropdown -->
                                    {
                                        isLogin?
                                        <li>       
                                            <div className="btn-group" style={{cursor: "pointer;",padding: "10px;",verticalAlign: "unset"}} 
                                                role="group" ng-show="auth.isAuthenticated()">
                                            <a  id="btnGroupDrop1"  className={styles.dropdown_toggle} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span ng-if="currentUser.first_name || currentUser.last_name">
                                                        <span ng-bind="currentUser.first_name">Nishad</span>
                                                        <span ng-bind="currentUser.last_name"></span>
                                                    </span>
                                                    <span ng-if="!currentUser.first_name && !currentUser.last_name && currentUser.email">
                                                        <span ng-bind="currentUser.email"></span> 
                                                    </span>
                                                    <span ng-if="!currentUser.first_name && !currentUser.last_name && !currentUser.email">
                                                        <span ng-bind="currentUser._phone"></span>
                                                    </span>
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
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
                                     <span>
                                              <li ng-hide="" className="dropdown top-dropdown-color topbar-login">
                                                <a className={styles.loginbtn} ng-click="openLoginModal()" onClick= {()=> setIsOpen(true)}  style={{color:"#000"}}>Login</a>
                                              </li>
                                            
                                              <li ng-hide="" className={`dropdown ${styles.top_dropdown_color}`}>
                                                <a ng-click="openRegisterModal()" onClick={()=> setRegOpen(true)} style={{color: "#000;"}} target="_self">Register</a>
                                              </li>
                                     </span> 
                                 */}

                                    {/* } */}

                                 
                                </ul>
                            </div>
                            {/* <!-- /.navbar-collapse --> */}
                        </nav>
                    </div>
                </div>


                {/* <!--Mobile Navbar--> */}
  
        
  
     </div>

)};

 export default Navbar;