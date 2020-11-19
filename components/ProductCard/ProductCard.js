import styles from "./ProductCard.module.css";

const Best_seller = ({
  id,
  productName,
  images,
  price,
  measurement,
  isPlastic,
}) => (
  <div id={id}>
    <div className={styles.photo}>
      <img src={`http://test.bazar365.store${images[0].image}`} alt="product" />
      <div className={styles.top_right}>
        {isPlastic ? (
          <img
            src="../img/GoldenReward-B365-24px.jpg"
            style={{ width: "20px;height:20px" }}
            alt=""
          />
        ) : null}

        {/* <!-- <i className="fa fa-dot-circle-o <%-x.isPlastic && x.isPlastic==true?'text-danger':'text-success'%>"></i> --> */}
      </div>
      <div className={styles.overlay}>
        <div className={styles.divoverlay}>
            <h3 className={`${styles.priceshow} ${styles.show}`} id="<%= x.id %>">13</h3>
            <h3 className={`${styles.quantityshow} ${styles.show}`}>11</h3>
            <h3 className={`${styles.addtocartshow} ${styles.hide}`} ng-click="CartsWidget()" style={{ marginTop: "40%" }} >
              Add to cart
            </h3>
        </div>
        {/* <!--View details--> */}
        <a className={`${styles.btnshow} lozad`} href="/product/<%= x.productSlug %>"  target="_self" >
          Show Details
        </a>
        {/* <!--modal-open-end--> */}
        <div className={(styles.incrementDecriment, styles.hide)}>
          <span style={{ fontSize: "24px" }} ng-click="ee_decrementFunc('<%= x.id %>',0)" className={styles.incrementspan}>
            <i  className={`fa fa-minus-circle ${styles.AddtoCartButtonIcon}`} aria-hidden="true"></i>
          </span>
        </div>
        <div className={(styles.incrementDecrimentright, styles.hide)}>
          <span style={{ fontSize: "24px" }} ng-click="ee_incrementFunc('<%= x.id %>')" className={styles.decrementspan}>
             <i className={`fa fa-plus-circle ${styles.AddtoCartButtonIcon}`} aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>
    {/* <!--View details 4 mobile--> */}

    <a
      style={{ display: "none;" }}
      className={(styles.btnshow, styles.details_mobile)}
      href="#"
      target="_self"
    ></a>

    {/* <!--Box-Fields--> */}
    <div className={styles.info}>
      <div className={styles.price_details}>
        <div className={styles.info2}>
          <div className={styles.price_details}>
            <h3 className="text-left">
              <a href="#" target="_self">
                {productName}
              </a>
            </h3>
            <p className={(styles.measurement_tag, styles.measurement_font)}>
              {measurement}
            </p>
          </div>
        </div>
        <div className={(styles.price_details, styles.carousel_card_footer)}>
          <div className={styles.p_info}>
            <span
              className={`${(styles.addToCartDiscountPrice, styles.price_new)}`}
              style={{ color: " #93c244" }}
            >
              {price}
            </span>
            {/* <!-- <span style="border: 1px solid #f4f8eb; border-radius: 10px;padding: 2px 10px;"></span> --> */}
          </div>
          <div className={styles.add_to_cart}>
            {/* <span className="incrementDecriment hide" style={{fontSize: "24px"}} ng-click="ee_decrementFunc('<%= x.id %>',0)" className="incrementspan">
                                            <i className="fa fa-minus-circle AddtoCartButtonIconBottom"  aria-hidden="true"></i>
                                        </span> */}
            <div className={styles.cart_div}>
              <span>
                <img
                  className={styles.cart_img}
                  src="/img/bazar365-cart-icon-white.png"
                  alt="cart"
                />
              </span>
              <span
                className={(styles.shopping_cart_quantityShow, styles.hide)}
              >
                {" "}
              </span>
              <span className={styles.addtocartshow}>Cart</span>
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
export default Best_seller;
