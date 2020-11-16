import styles from './leftSideNav.module.css'

const SideNav = ({margin}) =>{

return (

  
    <div className={`${styles.page_wrapper} ${styles.chiller_theme} ${styles.toggled}` } id={styles.show_sidebar }>
    
      <nav id="sidebar" className={`${styles.sidebar_wrapper} ${margin ? styles.posMargin : styles.negMargin}`} >

        <div className={styles.sidebar_content}>
         
    
          {/* <!-- sidebar-search  --> */}
          <div className={styles.sidebar_menu}>
            <ul>
              <li className={styles.header_menu}>
                <span>Home</span>
               
              </li>
              <li className={styles.sidebar_dropdown}>
                <a href="#">
                  <i className="fa fa-shopping-cart"> </i>
                  <span>Dashboard</span>
                 
                </a>
                <div className={styles.sidebar_submenu}>
                  <ul>
                    <li>
                      <a href="#">Dashboard 1
                       
                      </a>
                    </li>
                    <li>
                      <a href="#">Dashboard 2</a>
                    </li>
                    <li>
                      <a href="#">Dashboard 3</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={styles.sidebar_dropdown}>
                <a href="#">
                  <i className="fa fa-shopping-cart"></i>
                  <span>E-commerce</span>
                  
                </a>
                <div className={styles.sidebar_submenu}>
                  <ul>
                    <li>
                      <a href="#">Products
    
                      </a>
                    </li>
                    <li>
                      <a href="#">Orders</a>
                    </li>
                    <li>
                      <a href="#">Credit cart</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={styles.sidebar_dropdown}>
                <a href="#">
                  <i className="fa fa-shopping-cart"></i>
                  <span>E-lectron</span>
                  
                </a>
                <div className={styles.sidebar_submenu}>
                  <ul>
                    <li>
                      <a href="#">Products
    
                      </a>
                    </li>
                    <li>
                      <a href="#">Orders</a>
                    </li>
                    <li>
                      <a href="#">Credit cart</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={styles.sidebar_dropdown}>
                <a href="#">
                  <i className="far fa-gem"></i>
                  <span>Components</span>
                </a>
            
              </li>
              
              <li className={styles.sidebar_dropdown}>
                <a href="#">
                  <i className="fa fa-globe"></i>
                  <span>Maps</span>
                </a>
                <div className={styles.sidebar_submenu}>
                  <ul>
                    <li>
                      <a href="#">Google maps</a>
                    </li>
                    <li>
                      <a href="#">Open street map</a>
                    </li>
                  </ul>
                </div>
              </li>
             
            </ul>
          </div>
          {/* <!-- sidebar-menu  --> */}
        </div>
        {/* <!-- sidebar-content  --> */}
       
      </nav>
      {/* <!-- sidebar-wrapper  --> */}
  
      {/* <!-- page-content" --> */}
    </div>
    // {/* <!-- page-wrapper --> */}

  
    
  



)};
export default SideNav;