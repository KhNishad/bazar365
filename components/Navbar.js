
import react ,{useState} from 'react';
import Modal from  'react-modal';
import RegModal from '../components/registerModal';



Modal.setAppElement('#__next');

const Navbar = () => {
 
     const [isOpen, setIsOpen] = useState(false)
     const [isRegOpen, setRegOpen] = useState(false)

    return (
                
    <div>
        

                    <Modal isOpen = {isRegOpen} className="register_modal"  >
                         <RegModal setRegOpen = {setRegOpen}/>
                    </Modal>



                     <Modal className='login_modal' isOpen={isOpen}>
            
                     </Modal>
                    
                    <div className="main_navigation_bar sticky">
                    <div className="container-fluid topbarsticky">
                        <nav className="navbar sticky-navbar" role="navigation" >
                            {/* <!-- Brand logo --> */}
                            
                            <div className="navbar-header" style={{width:"20%;"}}>
                                <a className="navTglr-stickyBar" id="btnToggleLeft">
                                    <span className="fa fa-bars fa-lg"></span>
                                </a>
                                <a href="/" className="stickyLogo" target="_self"><img src="/img/bazar365-logo.png" alt="logo"/></a>
                            </div>
                            <div className="topbar-header-right" style={{width:"80%;"}}>
                                <ul className="header-login" style={{width:"100%;"}}>

                                    {/* <!-- Product Search Box --> */}
                                    <li className="ee-top-search-box" style={{width:"55%;"}}>
                                        <form className="navbar-form" role="search" >
                                            <div className="input-group stickey-searchbox">
                                                <input type="text" className="form-control ee_stickyform" id="scrollNavigationSearchBox" placeholder="Search for products (e.g. rice, dal)" ng-model="productName"/>
                                                <span className="btn input-group-addon" aria-hidden="true"><i className="fa fa-search" aria-hidden="true"></i></span>
                                            </div>
                                        </form>
                                    </li> 

                                    {/* <!-- Contact Info --> */}
                                    <li className="top-phone">
                                        <a href="https://api.whatsapp.com/send/?phone=+8801842088300" style={{fontWeight: "700px;"}}>
                                            <img src="/img/whatsapp-icon.png" alt="" style={{width: "25px;"}}/>
                                        </a>
                                    </li>
                                    
                                    {/* <!-- Contact Info --> */}
                                    <li className="top-phone">
                                        <i className="fa fa-phone"></i>
                                        <a href="tel:+8809642446688" style={{fontWeight: "700;"}}>09642446688</a>
                                    </li>
                                    
                                    {/* <!-- Login --> */}
                                    <li ng-hide="" className="dropdown top-dropdown-color topbar-login">
                                        <a className="loginbtn" ng-click="openLoginModal()" onClick= {()=> setIsOpen(true)}  style={{color:"#000" }}>Login</a>
                                    </li>
                                    
                                    <li ng-hide="" className="dropdown top-dropdown-color">
                                        <a ng-click="openRegisterModal()" onClick={()=> setRegOpen(true)} style={{color: "#000;"}} target="_self">Register</a>
                                    </li>
                                    <li>
                                    {/* <!-- dropdown --> */}
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- /.navbar-collapse --> */}
                        </nav>
                    </div>
                </div>
     </div>

)};

 export default Navbar;