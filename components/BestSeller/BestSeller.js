import Product_cart from "../ProductCard/ProductCard";
import styles from "./BestSeller.module.css";

const BestSellerProduct = ({ products }) => {
  return (
    <section
      className={styles.section_container}
      style={{
        padding: "0px;",
        marginTop: " 0px;",
        backgroundColor: "#F7F7F7",
      }}
    >
      <div className={styles.wrapper}>
        <div
          className={`${styles.myflash}  alert alert-dismissable speechwarning`}
        >
          <div className="container text-center">
            <h3 style={{ margin: "0;" }} className={styles.homepage_headings}>
              B365 Best Sellers
            </h3>
            <a
              className="btn btn-success"
              href="/products/featured_products"
              target="_self"
            >
              View All
            </a>
          </div>
        </div>
      </div>
      <main className="container">
        <div className="row d-flex justify-content-center">
          {products.map((product) => (
            <div className={styles.prodItm}>
              <div className={styles.col_item} style={{ flexGrow: "inherit" }}>
                <Product_cart key={product.id} {...product} />
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};
export default BestSellerProduct;
