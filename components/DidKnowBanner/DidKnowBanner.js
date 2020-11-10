import styles from './DidKnowBanner.module.css';

const Did_know_Banner = () =>(
    <section className={styles.section_container}>
        <div className={`container-fluid ${styles.ftrAd}`}>
        
                <div className="row">
                
                        <div className="col" style={{padding:" 0;"}}>
                            {/* <!-- <a href="<%-x.adlink%>" target="_self"> --> */}
                                <img src="/img/did-you-know-banner-d25fb0cd-63a3-4001-af9a-cc0b1e84bda8.png" alt="" style={{width: "100%;"}}/>
                            {/* <!-- </a> --> */}
                        </div>
                
                </div>
        
        </div>
   </section>

);
export default  Did_know_Banner;