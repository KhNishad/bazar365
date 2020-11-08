

const Product_Category = ({id,name,img})=>(

  
                 <div style={{width: "310px;"}}>
                        <a className="" target="_self" href="#" style={{textDecoration:"none"}}>
                            <div className="width-100">
                                <div className="pro-cat-back">
                                    <div id="photo" style={{textAlign:" center;", padding: "20px;"}}>
                                        <img style={{float:"left;", verticalAlign:"middle"}} src={img} width="12%" height="12%" alt="category-icon"/>
                                        <span className="product-name-style-1" style={{fontSize:"large;", verticalAlign:"middle"}}>
                                        {name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                  
            
);
export default Product_Category;