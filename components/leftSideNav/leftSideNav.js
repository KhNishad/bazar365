import styles from './leftSideNav.module.css'

const LeftSideNav = ({margin,categories}) =>{

return (


    
  

        <div id="leftsidebar" className={`${styles.left_sidebar} ${margin ? styles.posMargin : styles.negMargin}`} > 
        <div className={styles.sidebar_links}>
            <ul className={`${styles.list_unstyled} ${styles.categories_left}`} style={{paddingLeft:'5px'}}>
                  <li className="ee_ac"> 
                      <a className={`ee_cat ${styles.sidebar_top_categories}`} href="/product-request" target="_self"> Product Requests </a>
                   </li>
                  <li className="ee_ac"> 
                      <a className={`ee_cat ${styles.sidebar_top_categories}`} href="/quick-order" target="_self"> Upload Shopping List </a>
                    </li>
                    <li className="ee_ac"> <a className={`ee_cat ${styles.sidebar_top_categories}`} href="/how-it-works" target="_self"> How it works </a> 
                  </li>
              </ul> 
              <hr className={styles.sidebar_hr_line}/>
          </div>
          <div className={styles.category} style={{marginTop : "0px"}}>
                <a className={styles.ee_catheading} href="/" target="_self">Shop By Category</a> 
                <ul className={`${styles.list_unstyled} ${styles.categories_left}`} style={{paddingLeft: "15px"}}>   
                   

                    {/* wrap into dynamic */}
                    {
                        categories.map((category)=>
                        <li className="ee_ac"> 
                            <img className={styles.ee_cat_icon} src={`http://test.bazar365.store${category.category_icon}`} width="20px" height="20px"    alt="category-icon"/> 
                            <span style={{verticalAlign: "middle"}}>
                                  <a className={`ee_cat ${styles.ee_sidebarActive} ${styles.category_slug}`} data-slug="baby-care" id="" href="#"  target="_self">{category.category_title}
                                      <strong style={{float: "right"}}> <i id="" className="catrighticon fa fa-angle-right " aria-hidden="true"> </i> 
                                      </strong> 
                                </a>
                            </span> 
                            <ul className={''} id={styles.ee_subCat}> 
                           {
                             category.children.map((subCategory)=>
                                <li>
                                   <span style={{verticalAlign: "middle"}}>
                                    <a className={styles.category_slug} data-slug="baby-food" id="cat_5f622157788a24543b6451fa_baby-food" href="/category/baby-food" target="_self">
                                       {subCategory.category_title}
                                      </a> 
                                  </span>
                              </li>
                             )
                            
                           }
                          
                          
                       </ul> 
                         
                   </li>
                        )

                    }

                    {/* wrap into dynamic */}
                          
                 
                    
                
                </ul>
          </div>

          <div className={styles.category} style={{marginTop: "0px"}}> 
          <hr className={styles.sidebar_hr_line}/>
              <a className={styles.ee_catheading} href="/brands" target="_self">Shop By Brands</a>
               <ul className={`${styles.list_unstyled} ${styles.categories_left}`} style={{paddingLeft:'15px'}}> 
                    <li className="ee_ac">
                       <img className={styles.ee_cat_icon} src="../img/brand3-1cf28823-d28e-47d8-b75d-e5d14bee43b9.png" width="20px" height="20px" alt="icon"/>
                       <span style={{verticalAlign: "middle;"}}> 
                          <a className={`ee_cat ee_sidebarActive ${styles.category_slug}`} data-slug="unilever" id="b_5faa3b83a8eb7a73fae5a790_unilever" href="/brand/unilever" target="_self"> Unilever </a>
                      </span> 
                     </li>
               </ul> 
            </div>
        </div>




)};
export default LeftSideNav;