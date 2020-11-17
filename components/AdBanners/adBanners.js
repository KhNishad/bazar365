// import styles from './DidKnowBanner.module.css';

const adBanners = ({img,id,size}) =>(
    // <section className={styles.section_container}>
    //     <div className={`container-fluid ${styles.ftrAd}`}>
        
    //             <div className="row" >
                
                        <div  style={{padding:" 0;",flexGrow: 'inherit', width:`${100/size}%`}}id ={id}>
                            {/* <!-- <a href="<%-x.adlink%>" target="_self"> --> */}
                                <img src={img} alt="" style={{width: "100%;"}}/>
                              
                               
                            {/* <!-- </a> --> */}
                        </div>
                        
                
//                 </div>
        
//         </div>
//    </section>

);
export default  adBanners;