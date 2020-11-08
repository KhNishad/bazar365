
const Best_seller = ({id,name,img,unit,price,weight,plastic_icon}) => (
  
        
       
                    <div id={id}>
                        <div className="photo">
                            <img src={img}  alt="product"/>
                            <div className="top-right"> 
                               
                                    <img src={plastic_icon} style={{width:"20px;height:20px"}} alt=""/>
                              
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
                                        <h3><a href="/product/<%= x.productSlug %>" target="_self">{name}</a></h3>
                                        <p className="measurement-tag measurement-font" >
                                        {weight}
                                        </p>
                                       
                                    </div>
                                </div>
                                <div className="price-details carousel-card-footer">
                                    <div className="p-info">
                                        <span className="addToCartDiscountPrice price-new text-center ">{price}</span>                                               
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
               

);
export default Best_seller ;