import styles from './productCategory.module.css'

const Product_Category = ({id,name,img})=>(

  
                 <div style={{width: "310px;"}} id={id}>
                        <a className="" target="_self" href="#" style={{textDecoration:"none"}}>
                            <div className="width-100">
                                <div className={styles.pro_cat_back}>
                                    <div id="photo" style={{textAlign:" center;", padding: "20px;"}}>
                                        <img style={{float:"left;", verticalAlign:"middle"}} src={img} width="12%" height="12%" alt="category-icon"/>
                                        <span className={styles.product_name_style_1} style={{fontSize:"large;", verticalAlign:"middle"}}>
                                        {name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                  
            
);
export default Product_Category;