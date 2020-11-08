const Deal_of_day = () =>(
                <section   className="section-container ">
                        <h1 className="homepage-headings">
                            {/* <!-- dynamic text --> */}
                            Deals Of the Day
                        </h1>
                        <div  className="container-fluid deals_slider Promise PromisePlus row" style={{padding:"0;"}}>
                        
                                {/* <!--If admin panel carry slider item--> */}
                            
                                    <div className="column" style={{padding: "0px 12px;"}}>
                                    <div className="slide slide-deals-poster">
                                        <a href="<%-x.link%>" target="_self">
                                            <img src="/img/10-discount-d0e6f757-3688-463e-8893-14f07802db78.png" alt="deals-poster" className="img-responsive"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="column" style={{padding: "0px 12px;"}}>
                                    <div className="slide slide-deals-poster">
                                        <a href="<%-x.link%>" target="_self">
                                            <img src="/img/redeem-coins-5ecba244-e9d3-4681-9cac-7e25a95889cf.png" alt="deals-poster" className="img-responsive"/>
                                        </a>
                                    </div>
                                </div>
                            
                        </div>
                
            </section>


);
export default Deal_of_day;