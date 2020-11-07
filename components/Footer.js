


const Footer = () =>(

    // <!-- <section className="section-container "> -->
    <section>
    <div className="container-fluid ftrTop">
        <hr className="ftr-hr-line"/>
        <div className="row">
            <div className="col-md-3 fCol-logo ">
                <div className="footer-logo-cont">
                    <a className="ftrlogo" href="/" style={{maxWidth:"200px;", display:" inline-block;"}} target="_self">
                        <img className="navbar-logo" src="/img/bazar365-logo.png" alt="logo"/>
                    </a>
                    <div className="soclIcons">
                        
                    </div>
                </div>
            </div>
            <div className="col-md-2 fCol">
                <h6 className="ftr-heading">About Us</h6>
                <ul className="nav flex-column">
                    <li><a href="/about" target="_self">About Us</a></li>
                    <li><a href="/contact" target="_self">Contact Us</a></li>
                    <li><a href="/faqs" target="_self">FAQ</a></li>
                </ul>
            </div>
            <div className="col-md-2 fCol">
                <h6 className="ftr-heading">Terms & Privacy</h6>
                <ul className="nav flex-column">
                    <li><a href="/termscondition" target="_self">Terms & Conditions</a></li>
                    <li><a href="/privacypolicy" target="_self">Privacy & Policy</a></li>
                    
                </ul>
            </div>
            <div className="col-md-2 fCol">
                <h6 className="ftr-heading">Important Links</h6>
                <ul className="nav flex-column">
                    <li><a href="/returnpolicy" target="_self">Return & Refund Policy</a></li>
                    <li><a href="/reward-policy" target="_self">Reward Redemption</a></li>
                    <li><a href="/product-request" target="_self">Product Requests</a></li>
                </ul>
            </div>
            <div className="col-md-2 fCol" style={{textAlign: "end;",marginLeft:" auto;", marginRight: "auto;"}}>
                <div className="ftr-paymentmethod">
                    <h6 className="ftr-heading">Payment Methods</h6>
                    <div className="footer-ssl-certificate">
                        <img className="navbar-logo" src="/img/paywith-solvehost-online (1).png" alt="Payment Methods"/>
                        {/* <!-- <img className="navbar-logo" src="/images/payment/icon-visa.png" alt="Payment Methods"> -->
                        <!-- <img className="navbar-logo" src="/images/payment/icon-bkash.png" alt="Payment Methods"> -->
                        <!-- <img className="navbar-logo" src="/images/payment/icon-master-card.png" alt="Payment Methods"> -->
                        <!-- </div> --> */}
                    </div>
                </div>
            </div>

        </div>
    </div>
    
    <div className="ftrBtm">
        <div className="row">
            <div className="col-sm-4">
              
                <div className="footer-copyright"> Copyright ©  2020 Bazar365 </div>
                   
             
            </div>
            <div className="col-sm-4 social-icon">
                <span>Follow Us</span>
                <a href="https://www.facebook.com/bazar365.store" className="icon-btn facebook"><i className="fa fa-facebook"></i><span></span></a>
                {/* <!-- <a href="https://twitter.com/" className="icon-btn twitter"><i className="fa fa-twitter"></i><span></span></a>
                <a href="https://linkedin.com/" className="icon-btn linkedin"><i className="fa fa-linkedin"></i><span></span></a>
                <a href="https://youtube.com/" className="icon-btn youtube"><i className="fa fa-youtube"></i><span></span></a> --> */}
                <a href="https://www.instagram.com/bazar365.store" className="icon-btn instagram"><i className="fa fa-instagram"></i><span></span></a>
            </div>
            <div className="col-sm-4">
                <div className="footer-credit" >Design & Developed by
                    <a href="https://everexpert.com" target="_blank" style={{textDecoration:"underline;", color: "#0069FF;"}}>EverExpert</a>
                </div>
            </div>
        </div>
     </div>
    </section>  
       

);
export default Footer;