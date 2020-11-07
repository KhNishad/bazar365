


const Footer = () =>(

    // <!-- <section class="section-container "> -->
    <section>
    <div class="container-fluid ftrTop">
        <hr class="ftr-hr-line"/>
        <div class="row">
            <div class="col-md-3 fCol-logo ">
                <div class="footer-logo-cont">
                    <a class="ftrlogo" href="/" style={{maxWidth:"200px;", display:" inline-block;"}} target="_self">
                        <img class="navbar-logo" src="/img/bazar365-logo.png" alt="logo"/>
                    </a>
                    <div class="soclIcons">
                        
                    </div>
                </div>
            </div>
            <div class="col-md-2 fCol">
                <h6 class="ftr-heading">About Us</h6>
                <ul class="nav flex-column">
                    <li><a href="/about" target="_self">About Us</a></li>
                    <li><a href="/contact" target="_self">Contact Us</a></li>
                    <li><a href="/faqs" target="_self">FAQ</a></li>
                </ul>
            </div>
            <div class="col-md-2 fCol">
                <h6 class="ftr-heading">Terms & Privacy</h6>
                <ul class="nav flex-column">
                    <li><a href="/termscondition" target="_self">Terms & Conditions</a></li>
                    <li><a href="/privacypolicy" target="_self">Privacy & Policy</a></li>
                    
                </ul>
            </div>
            <div class="col-md-2 fCol">
                <h6 class="ftr-heading">Important Links</h6>
                <ul class="nav flex-column">
                    <li><a href="/returnpolicy" target="_self">Return & Refund Policy</a></li>
                    <li><a href="/reward-policy" target="_self">Reward Redemption</a></li>
                    <li><a href="/product-request" target="_self">Product Requests</a></li>
                </ul>
            </div>
            <div class="col-md-2 fCol" style={{textAlign: "end;",marginLeft:" auto;", marginRight: "auto;"}}>
                <div class="ftr-paymentmethod">
                    <h6 class="ftr-heading">Payment Methods</h6>
                    <div class="footer-ssl-certificate">
                        <img class="navbar-logo" src="/img/paywith-solvehost-online (1).png" alt="Payment Methods"/>
                        {/* <!-- <img class="navbar-logo" src="/images/payment/icon-visa.png" alt="Payment Methods"> -->
                        <!-- <img class="navbar-logo" src="/images/payment/icon-bkash.png" alt="Payment Methods"> -->
                        <!-- <img class="navbar-logo" src="/images/payment/icon-master-card.png" alt="Payment Methods"> -->
                        <!-- </div> --> */}
                    </div>
                </div>
            </div>

        </div>
    </div>
    
    <div class="ftrBtm">
        <div class="row">
            <div class="col-sm-4">
              
                <div class="footer-copyright"> Copyright ©  2020 Bazar365 </div>
                   
             
            </div>
            <div class="col-sm-4 social-icon">
                <span>Follow Us</span>
                <a href="https://www.facebook.com/bazar365.store" class="icon-btn facebook"><i class="fa fa-facebook"></i><span></span></a>
                {/* <!-- <a href="https://twitter.com/" class="icon-btn twitter"><i class="fa fa-twitter"></i><span></span></a>
                <a href="https://linkedin.com/" class="icon-btn linkedin"><i class="fa fa-linkedin"></i><span></span></a>
                <a href="https://youtube.com/" class="icon-btn youtube"><i class="fa fa-youtube"></i><span></span></a> --> */}
                <a href="https://www.instagram.com/bazar365.store" class="icon-btn instagram"><i class="fa fa-instagram"></i><span></span></a>
            </div>
            <div class="col-sm-4">
                <div class="footer-credit" >Design & Developed by
                    <a href="https://everexpert.com" target="_blank" style={{textDecoration:"underline;", color: "#0069FF;"}}>EverExpert</a>
                </div>
            </div>
        </div>
     </div>
    </section>  
       

);
export default Footer;