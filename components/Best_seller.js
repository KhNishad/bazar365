
const Best_seller = () => (
    // <!-- Featured Product Section -->
    <section className="section-container" style={{padding: "0px;margin-top: 10px;"}}>
        <div className="wrapper">
            <div className="myflash  alert alert-dismissable speechwarning">
            <div className="container text-center">
                <h3 style={{margin:"0;"}} className="homepage-headings">B365 Best Sellers</h3>
                <a  className="btn btn-success"  href="/products/featured_products" target="_self" >View All</a>
            </div>
            </div>
        </div>
        
        <div className="row p-0 m-0 featured_products">
           
                <div className="prodItm product-<%= x.id %>"> 
                    <div className="col-item">
                        <div className="photo">
                            <img src="/img/1837-bashundhara-kitchentowel2rollsbazar365-d0011355-c616-4e41-97e8-25a795522ed8.jpg"  alt="product"/>
                            <div className="top-right"> 
                               
                                    <img src="/img/GoldenReward-B365-24px.jpg" style={{width:"20px;height:20px"}} alt=""/>
                              
                                 {/* <!-- <i className="fa fa-dot-circle-o <%-x.isPlastic && x.isPlastic==true?'text-danger':'text-success'%>"></i> --> */}
                            </div>
                            <div className="overlay" >
                                <div className="divoverlay" ng-click="addProduct('<%= x.id %>')">
                                    <h3 className="priceshow hide" id="<%= x.id %>"></h3>
                                    <h3 className="quantityshow hide"></h3>
                                    <h3 className="addtocartshow show" ng-click="CartsWidget()" style={{marginTop:"40%"}}>Add to cart</h3>
                                </div>
                                {/* <!--View details--> */}
                                <a className="btnshow lozad" href="/product/<%= x.productSlug %>" target="_self">Show Details</a>
                                {/* <!--modal-open-end--> */}
                                <div className="incrementDecriment hide">
                                    <span style={{fontSize: "24px"}} ng-click="ee_decrementFunc('<%= x.id %>',0)" className="incrementspan">
                                        <i className="fa fa-minus-circle AddtoCartButtonIcon"  aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div className="incrementDecrimentright hide">
                                    <span style={{fontSize: "24px"}} ng-click="ee_incrementFunc('<%= x.id %>')" className="decrementspan">
                                        <i className="fa fa-plus-circle AddtoCartButtonIcon" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* <!--View details 4 mobile--> */}
                  
                            <a style={{display: "none;"}} className="btnshow details_mobile" href="/product/<%= x.productSlug %>" target="_self"></a>
                  
                        {/* <!--Box-Fields--> */}
                        <div className="info">
                            <div className="price-details">
                                <div className="info2" ng-click="addProduct('<%= x.id %>')">
                                    <div className="price-details">
                                        <h3><a href="/product/<%= x.productSlug %>" target="_self">Bashundhara Kitchen Towel 2 Rolls</a></h3>
                                        <p className="measurement-tag measurement-font" >
                                        500 gm
                                        </p>
                                       
                                    </div>
                                </div>
                                <div className="price-details carousel-card-footer">
                                    <div className="p-info">
                                        <span className="addToCartDiscountPrice price-new text-center ">৳ 450</span>                                               
                                        {/* <!-- <span style="border: 1px solid #f4f8eb; border-radius: 10px;padding: 2px 10px;"></span> --> */}
                                    
                                    </div>
                                    <div className="add-to-cart">
                                        {/* <span className="incrementDecriment hide" style={{fontSize: "24px"}} ng-click="ee_decrementFunc('<%= x.id %>',0)" className="incrementspan">
                                            <i className="fa fa-minus-circle AddtoCartButtonIconBottom"  aria-hidden="true"></i>
                                        </span> */}
                                        <div className="cart-div" ng-click="addProduct('<%= x.id %>')">
                                            <span>
                                                <img className="cart-img" src="/img/bazar365-cart-icon-white.png"  alt="cart"/>
                                            </span>
                                            <span className="shopping-cart-quantityShow hide"> </span>
                                            <span className="addtocartshow">Cart</span>
                                        </div>
                                        {/* <span className="incrementDecriment hide" style={{fontSize: "24px"}} ng-click="ee_incrementFunc('<%= x.id %>')" className="decrementspan">
                                            <i className="fa fa-plus-circle AddtoCartButtonIconBottom" aria-hidden="true"></i>
                                        </span> */}
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* another products */}
                <div className="prodItm product-<%= x.id %>"> 
                    <div className="col-item">
                        <div className="photo">
                            <img src="/img/1152-danopowerfullcreaminstantmilkpowderboxbazar365-d8d945e8-8830-46c5-a57f-678a1c6d2ffa.jpg"  alt="product"/>
                            <div className="top-right"> 
                               
                                    <img src="/img/GoldenReward-B365-24px.jpg" style={{width:"20px;height:20px"}} alt=""/>
                              
                                 {/* <!-- <i className="fa fa-dot-circle-o <%-x.isPlastic && x.isPlastic==true?'text-danger':'text-success'%>"></i> --> */}
                            </div>
                            <div className="overlay" >
                                <div className="divoverlay" ng-click="addProduct('<%= x.id %>')">
                                    <h3 className="priceshow hide" id="<%= x.id %>"></h3>
                                    <h3 className="quantityshow hide"></h3>
                                    <h3 className="addtocartshow show" ng-click="CartsWidget()" style={{marginTop:"40%"}}>Add to cart</h3>
                                </div>
                                {/* <!--View details--> */}
                                <a className="btnshow lozad" href="/product/<%= x.productSlug %>" target="_self">Show Details</a>
                                {/* <!--modal-open-end--> */}
                                <div className="incrementDecriment hide">
                                    <span style={{fontSize: "24px"}} ng-click="ee_decrementFunc('<%= x.id %>',0)" className="incrementspan">
                                        <i className="fa fa-minus-circle AddtoCartButtonIcon"  aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div className="incrementDecrimentright hide">
                                    <span style={{fontSize: "24px"}} ng-click="ee_incrementFunc('<%= x.id %>')" className="decrementspan">
                                        <i className="fa fa-plus-circle AddtoCartButtonIcon" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* <!--View details 4 mobile--> */}
                  
                            <a style={{display: "none;"}} className="btnshow details_mobile" href="/product/<%= x.productSlug %>" target="_self"></a>
                  
                        {/* <!--Box-Fields--> */}
                        <div className="info">
                            <div className="price-details">
                                <div className="info2" ng-click="addProduct('<%= x.id %>')">
                                    <div className="price-details">
                                        <h3><a href="/product/<%= x.productSlug %>" target="_self">Dano Power Full Cream Instant Milk Powder Box</a></h3>
                                        <p className="measurement-tag measurement-font" >
                                        1000 gm
                                        </p>
                                       
                                    </div>
                                </div>
                                <div className="price-details carousel-card-footer">
                                    <div className="p-info">
                                        <span className="addToCartDiscountPrice price-new text-center ">৳ 500</span>                                               
                                        {/* <!-- <span style="border: 1px solid #f4f8eb; border-radius: 10px;padding: 2px 10px;"></span> --> */}
                                    
                                    </div>
                                    <div className="add-to-cart">
                                        {/* <span className="incrementDecriment hide" style={{fontSize: "24px"}} ng-click="ee_decrementFunc('<%= x.id %>',0)" className="incrementspan">
                                            <i className="fa fa-minus-circle AddtoCartButtonIconBottom"  aria-hidden="true"></i>
                                        </span> */}
                                        <div className="cart-div" ng-click="addProduct('<%= x.id %>')">
                                            <span>
                                                <img className="cart-img" src="/img/bazar365-cart-icon-white.png"  alt="cart"/>
                                            </span>
                                            <span className="shopping-cart-quantityShow hide"> </span>
                                            <span className="addtocartshow">Cart</span>
                                        </div>
                                        {/* <span className="incrementDecriment hide" style={{fontSize: "24px"}} ng-click="ee_incrementFunc('<%= x.id %>')" className="decrementspan">
                                            <i className="fa fa-plus-circle AddtoCartButtonIconBottom" aria-hidden="true"></i>
                                        </span> */}
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                 {/* another products */}
                 <div className="prodItm product-<%= x.id %>"> 
                    <div className="col-item">
                        <div className="photo">
                            <img src="/img/1705-vim-dishwashingliquidbazar365-be381e3e-cd0a-4c37-86f4-ca49b193cddd.jpg"  alt="product"/>
                            <div className="top-right"> 
                               
                                    <img src="/img/GoldenReward-B365-24px.jpg" style={{width:"20px;height:20px"}} alt=""/>
                              
                                 {/* <!-- <i className="fa fa-dot-circle-o <%-x.isPlastic && x.isPlastic==true?'text-danger':'text-success'%>"></i> --> */}
                            </div>
                            <div className="overlay" >
                                <div className="divoverlay" ng-click="addProduct('<%= x.id %>')">
                                    <h3 className="priceshow hide" id="<%= x.id %>"></h3>
                                    <h3 className="quantityshow hide"></h3>
                                    <h3 className="addtocartshow show" ng-click="CartsWidget()" style={{marginTop:"40%"}}>Add to cart</h3>
                                </div>
                                {/* <!--View details--> */}
                                <a className="btnshow lozad" href="/product/<%= x.productSlug %>" target="_self">Show Details</a>
                                {/* <!--modal-open-end--> */}
                                <div className="incrementDecriment hide">
                                    <span style={{fontSize: "24px"}} ng-click="ee_decrementFunc('<%= x.id %>',0)" className="incrementspan">
                                        <i className="fa fa-minus-circle AddtoCartButtonIcon"  aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div className="incrementDecrimentright hide">
                                    <span style={{fontSize: "24px"}} ng-click="ee_incrementFunc('<%= x.id %>')" className="decrementspan">
                                        <i className="fa fa-plus-circle AddtoCartButtonIcon" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* <!--View details 4 mobile--> */}
                  
                            <a style={{display: "none;"}} className="btnshow details_mobile" href="/product/<%= x.productSlug %>" target="_self"></a>
                  
                        {/* <!--Box-Fields--> */}
                        <div className="info">
                            <div className="price-details">
                                <div className="info2" ng-click="addProduct('<%= x.id %>')">
                                    <div className="price-details">
                                        <h3><a href="/product/<%= x.productSlug %>" target="_self">Vim Dishwashing Liquid</a></h3>
                                        <p className="measurement-tag measurement-font" >
                                        300 gm
                                        </p>
                                       
                                    </div>
                                </div>
                                <div className="price-details carousel-card-footer">
                                    <div className="p-info">
                                        <span className="addToCartDiscountPrice price-new text-center ">৳ 324</span>                                               
                                        {/* <!-- <span style="border: 1px solid #f4f8eb; border-radius: 10px;padding: 2px 10px;"></span> --> */}
                                    
                                    </div>
                                    <div className="add-to-cart">
                                        {/* <span className="incrementDecriment hide" style={{fontSize: "24px"}} ng-click="ee_decrementFunc('<%= x.id %>',0)" className="incrementspan">
                                            <i className="fa fa-minus-circle AddtoCartButtonIconBottom"  aria-hidden="true"></i>
                                        </span> */}
                                        <div className="cart-div" ng-click="addProduct('<%= x.id %>')">
                                            <span>
                                                <img className="cart-img" src="/img/bazar365-cart-icon-white.png"  alt="cart"/>
                                            </span>
                                            <span className="shopping-cart-quantityShow hide"> </span>
                                            <span className="addtocartshow">Cart</span>
                                        </div>
                                        {/* <span className="incrementDecriment hide" style={{fontSize: "24px"}} ng-click="ee_incrementFunc('<%= x.id %>')" className="decrementspan">
                                            <i className="fa fa-plus-circle AddtoCartButtonIconBottom" aria-hidden="true"></i>
                                        </span> */}
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                 {/* another products */}
                 <div className="prodItm product-<%= x.id %>"> 
                    <div className="col-item">
                        <div className="photo">
                            <img src="/img/1887-wheelwashingpowder2in1cleanfreshbazar365-4dadbd26-d407-42fc-ba14-9df3e6840a79.jpg"  alt="product"/>
                            <div className="top-right"> 
                               
                                    <img src="/img/GoldenReward-B365-24px.jpg" style={{width:"20px;height:20px"}} alt=""/>
                              
                                 {/* <!-- <i className="fa fa-dot-circle-o <%-x.isPlastic && x.isPlastic==true?'text-danger':'text-success'%>"></i> --> */}
                            </div>
                            <div className="overlay" >
                                <div className="divoverlay" ng-click="addProduct('<%= x.id %>')">
                                    <h3 className="priceshow hide" id="<%= x.id %>"></h3>
                                    <h3 className="quantityshow hide"></h3>
                                    <h3 className="addtocartshow show" ng-click="CartsWidget()" style={{marginTop:"40%"}}>Add to cart</h3>
                                </div>
                                {/* <!--View details--> */}
                                <a className="btnshow lozad" href="/product/<%= x.productSlug %>" target="_self">Show Details</a>
                                {/* <!--modal-open-end--> */}
                                <div className="incrementDecriment hide">
                                    <span style={{fontSize: "24px"}} ng-click="ee_decrementFunc('<%= x.id %>',0)" className="incrementspan">
                                        <i className="fa fa-minus-circle AddtoCartButtonIcon"  aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div className="incrementDecrimentright hide">
                                    <span style={{fontSize: "24px"}} ng-click="ee_incrementFunc('<%= x.id %>')" className="decrementspan">
                                        <i className="fa fa-plus-circle AddtoCartButtonIcon" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* <!--View details 4 mobile--> */}
                  
                            <a style={{display: "none;"}} className="btnshow details_mobile" href="/product/<%= x.productSlug %>" target="_self"></a>
                  
                        {/* <!--Box-Fields--> */}
                        <div className="info">
                            <div className="price-details">
                                <div className="info2" ng-click="addProduct('<%= x.id %>')">
                                    <div className="price-details">
                                        <h3><a href="/product/<%= x.productSlug %>" target="_self">Wheel Washing Powder 2in 1 Clean & Fresh</a></h3>
                                        <p className="measurement-tag measurement-font" >
                                        500 gm
                                        </p>
                                       
                                    </div>
                                </div>
                                <div className="price-details carousel-card-footer">
                                    <div className="p-info">
                                        <span className="addToCartDiscountPrice price-new text-center ">৳ 45</span>                                               
                                        {/* <!-- <span style="border: 1px solid #f4f8eb; border-radius: 10px;padding: 2px 10px;"></span> --> */}
                                    
                                    </div>
                                    <div className="add-to-cart">
                                        {/* <span className="incrementDecriment hide" style={{fontSize: "24px"}} ng-click="ee_decrementFunc('<%= x.id %>',0)" className="incrementspan">
                                            <i className="fa fa-minus-circle AddtoCartButtonIconBottom"  aria-hidden="true"></i>
                                        </span> */}
                                        <div className="cart-div" ng-click="addProduct('<%= x.id %>')">
                                            <span>
                                                <img className="cart-img" src="/img/bazar365-cart-icon-white.png"  alt="cart"/>
                                            </span>
                                            <span className="shopping-cart-quantityShow hide"> </span>
                                            <span className="addtocartshow">Cart</span>
                                        </div>
                                        {/* <span className="incrementDecriment hide" style={{fontSize: "24px"}} ng-click="ee_incrementFunc('<%= x.id %>')" className="decrementspan">
                                            <i className="fa fa-plus-circle AddtoCartButtonIconBottom" aria-hidden="true"></i>
                                        </span> */}
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>

);
export default Best_seller ;