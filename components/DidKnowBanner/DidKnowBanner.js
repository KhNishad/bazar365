// import styles from './DidKnowBanner.module.css';

const Did_know_Banner = ({img,id,size}) =>(
    // <section className={styles.section_container}>
    //     <div className={`container-fluid ${styles.ftrAd}`}>
        
    //             <div className="row" >
                
                        <div className={`col-${12/size}`} style={{padding:" 0;",flexGrow: 'inherit'}}id ={id}>
                            {/* <!-- <a href="<%-x.adlink%>" target="_self"> --> */}
                                <img src={img} alt="" style={{width: "100%;"}}/>
                              
                               
                            {/* <!-- </a> --> */}
                        </div>
                        
                
//                 </div>
        
//         </div>
//    </section>

);
export default  Did_know_Banner;