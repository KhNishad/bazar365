import styles from './mainBanner.module.css'

const Banner = ({image}) =>(
    <section className={styles.container}>

           
         <img width="100%" src={`http://test.bazar365.store${image.firstImage}`} alt="Banner" className="img-responsive"/>

   </section> 

);
export default Banner;