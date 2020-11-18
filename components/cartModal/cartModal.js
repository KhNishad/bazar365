import styles from './cartModal.module.css';
import Modal from  'react-modal';

const CartModal = ({setIsOpen})=>{

    return (
        <div className="modal show" id="deliveryChargeModal" tabindex="-1" aria-labelledby="exampleModalLabel" style={{display: "block", paddingRight: "5px"}}> 
        <div className={`${styles.modal_dialog} modal-dialog-centered`}> 
            <div className={styles.modal_content}>
                <div className="modal-header ">
                    <h5 className="modal-title text-success" style={{alignSelf:"center"}} id="exampleModalLabel">Delivery Charge Policy</h5>
                    <button type="button" onClick={()=> setIsOpen(false)} className="close" data-dismiss="modal" aria-label="Close"> <i className="fa fa-times"></i> 
                    </button> 
                </div>
                <div className="modal-body">
                    <ol> 
                        <li> ৳ 29 fee on orders of ৳ 400 and above. </li>
                        <li> ৳ 39 fee applicable for all orders below ৳ 400 </li>
                        </ol> 
                    </div>
                </div>
        </div>
    </div>
    )
}
export default CartModal;