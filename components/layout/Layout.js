import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Banner from '../mainBanner/BannerMain';
import LeftSideNav from '../LeftSideNav/LeftSideNav'
import { Fragment } from 'react';
import react ,{useState} from 'react';
import styles from './layout.module.css';
import Cart from '../Cart/Cart';
import RightSideNav  from '../RightSideNav/RightSideNav';
import CartModal from '../CartModal/CartModal';



const Laayout = ({children, categories, mainManner}) => {


  // left side nav bar
  const [leftSideNav, setleftSideNav] = useState(false)
  const [margin, setmargin] = useState(false)
 

  const leftSideNavF  = ()=>{
    margin ? setmargin(false) : setmargin(true)
    leftSideNav ? setleftSideNav(false) : setleftSideNav(true)
    
  }
  // right side nav 
  const [rightSideNav, setrightSideNav] = useState(false)
  const [rightMargin, setrightMargin] = useState(true)

  const rightSideNavF = ()=> {
    rightSideNav ? setrightSideNav(false) : setrightSideNav(true)
    rightMargin ? setrightMargin(false) : setrightMargin(true)

  }

  
   return (

   

  <Fragment>

     
      <Navbar leftSideNavF={leftSideNavF} />

      <LeftSideNav margin={margin} categories={categories}/>

      <RightSideNav rightMargin = {rightMargin}  rightSideNavF={rightSideNavF}/>

   
  <div className={`${leftSideNav ? styles.BodyMargin : styles.noMargin}`}>
    <div className={` ${rightSideNav ? styles.rightSideMargin : styles.noRightSideMargin}`}>
      
    
    <Head>
      <title>Bazar365</title>
      <link rel="shortcut icon" href="/img/favicon.ico" />
    
      <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" /> */}
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        
    </Head>
        <div>
        
      
          <Banner  image={mainManner}/>
          <Cart rightSideNavF= {rightSideNavF}/>
              <div>
                  {children}
             </div>
          <Footer/>

      </div>
      </div>
  </div>
    </Fragment>
  
   
   )};

export default Laayout;