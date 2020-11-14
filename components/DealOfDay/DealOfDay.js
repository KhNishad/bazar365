


import styles from './DealOfDay.module.css';

const Deal_of_day = ({id,img}) =>(
                // <section   className={styles.section_container}>
                //         <h1 className={styles.homepage_headings}>
                //             {/* <!-- dynamic text --> */}
                //             Deals Of the Day
                //         </h1>
                //         <div  className={`row  ${styles.container_fluid, styles.deals_slider, styles.Promise, styles.PromisePlus} `} style={{padding:"0;",justifyContent:'center'}}>
                        
                                // {/* <!--If admin panel carry slider item--> */}
                            
                                    <div className="column" style={{padding: "0px 12px;"}}>
                                        <div className={styles.slide, styles.slide_deals_poster}>
                                            <a href="<%-x.link%>" target="_self">
                                                <img src={img}/>
                                            </a>
                                        </div>
                                   </div>
                                   /* <div className={styles.column} style={{padding: "0px 12px;"}}>
                                       <div className={styles.slide ,styles.slide_deals_poster}>
                                          <a href="<%-x.link%>" target="_self">
                                            <img src="/img/redeem-coins-5ecba244-e9d3-4681-9cac-7e25a95889cf.png" alt="deals-poster" className="img-responsive"/>
                                          </a>
                                      </div>
                                   </div> */
                                   
                            
            //             </div>
                
            // </section>


);
export default Deal_of_day;