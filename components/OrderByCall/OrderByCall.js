import styles from './OrderByCall.module.css'

const Order_by_call = ()=>(

    <section className={styles.section_container}>
    <div className={styles.h_v_center_align}>
        <span><i className={`fa fa-volume-control-phone ${styles.awesome_contact_order}`}></i></span>
        <span className={styles.order_call_text}>You can also order by simply calling us. To place your order, call us at</span>   <br/>            
        <span className={styles.order_call_text}>  <a style={{color: "#fff;"}} href="tel:+8809642446688">+8809642446688</a></span>
        <span className={styles.order_call_text}>
            <i style={{fontSize:"30px;"}}></i>
        </span>    
    </div>
</section>

);
export default Order_by_call;