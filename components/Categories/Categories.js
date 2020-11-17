import styles from './Categories.module.css'

const Categories = ({id,category_title,category_icon})=>(

  
                 <div style={{width: "310px;"}} id= {id} >
                        <a className="" target="_self" href="#" style={{textDecoration:"none"}}>
                            <div className="width-100">
                                <div className={styles.pro_cat_back}>
                                    <div id="photo" style={{textAlign:" center;", padding: "20px;"}}>
                                        <img src={`http://test.bazar365.store${category_icon}`}  style={{float:"left;", verticalAlign:"middle"}} width="12%" height="12%" alt="category-icon"/>
                                        <span className={styles.product_name_style_1} style={{fontSize:"large;", verticalAlign:"middle"}}>
                                        {category_title}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                  
            
);
export default Categories;