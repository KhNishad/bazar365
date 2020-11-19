import React , {useState} from 'react';
import {Link} from 'next/link';
import styles from './LoginModal.module.css';
import { useForm } from "react-hook-form";
import { Alert } from 'react-bootstrap';
import axios from 'axios';
import LoginService from '../../services/loginService';




const LoginModal = ({setIsOpen}) => {

   
    // const { register, handleSubmit, errors } = useForm();
    // form control
    const [ShowEmail, setShowEmail] = useState(false)
    const [ShowPhone, setShowPhone] = useState(true)
    const [otpShow, setotpShow] = useState(false)
    const [showEmailPhoneBtn, setshowEmailPhoneBtn] = useState(false)

    const ShowPhoneOrEmailF = ()=>{
        if(ShowEmail){
            setShowPhone(true)
            setShowEmail(false)
        }else{
            setShowPhone(false)
            setShowEmail(true)
        }
        setotpShow(false)
        showEmailPhoneBtn?setshowEmailPhoneBtn(false):setshowEmailPhoneBtn(true)
    }

 



     // post operation

  const changehandler= (e)=>{
        setphoneNum({[e.target.name] : e.target.value})
            }
   
  const  submitHandler = (e)=>{
    //   form control
      setShowEmail(false)
      setShowPhone(false)
     otpShow?setotpShow(false):setotpShow(true)
    




    //  LoginService.userLogin(phoneNum)
     e.preventDefault()

    // axios.post('http://192.168.0.17:3000/term/nishad',phoneNum)
    // .then(res =>{
    // console.log(res);
    // })
    // .catch(err =>{
    //  console.log(err);
    // })
    // export async function getServerSideProps() {
 

     
       
       
        // const posts = await res.json()
        // console.log('from index',categories[0].category_title);
        // console.log("type of posts", typeof posts);
        
        // console.log('fffffffffffffffffffff',phoneNum);
    
    //   }
}
            
        const [phoneNum, setphoneNum] = useState('')
   
    return (


       <div className="modal show" data-backdrop="static" data-keyboard="false" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" style={{paddingRight: "5px", display: "block"}}> 
          <div className={`${styles.modal_dialog} modal-dialog-centered`} role="document">

       
        <div className={`${styles.modal_content} ${styles.login}`}>
        <div className={styles.modal_header}>
             <h5 className={styles.modal_title} id="exampleModalCenterTitle">Login</h5>
              <button type="button" onClick={()=> setIsOpen(false)} className="close" ng-click="closeLoginModal()">
                   <i className="fa fa-times"></i>
                </button> 
               </div>
               <div className={styles.modal_body}> 
                   <div className="pt-3 pb-3"> 
                       <button onClick={ShowPhoneOrEmailF} ng-click="typeChange()" type="button" className="btn btn-block btn-lg btn-outline-secondary"> 

                         
                           {
                               showEmailPhoneBtn?
                                <span  ng-show="!isEmailButton" className="ng-hide">
                                <i className="fa fa-mobile" style={{marginRight:'5px'}}>
                                    Login with Phone number
                                </i>
                                </span>
                                : 
                                
                                 <span ng-show="isEmailButton">
                                <i className="fa fa-envelope" style={{marginRight:'5px'}}>
                                    Login with Email
                                </i> 
                            </span>
                            
                           }
                               
                        </button>
                        {

                        }
                                </div>
                                <div className={styles.separator}>or</div>
                                

                              
                                {
                                      ShowEmail?
                                  
                                          <div ng-show="isEmail" className="ng-hide">
                                          <form name="emailLoginForm" ng-submit="emailLoginForm.$valid &amp;&amp; emailLogin()" novalidate="" className="ng-pristine ng-valid-email ng-invalid ng-invalid-required ng-valid-pattern"> 
                                                {/* <span className="error ng-hide" ng-show="(emailLoginForm.email.$touched || emailLoginForm.$submitted)&amp;&amp;emailLoginForm.email.$error.required"> email is required</span> */}
                                                 {/* <span className="error ng-hide" ng-show="(emailLoginForm.email.$dirty || emailLoginForm.$submitted)&amp;&amp;emailLoginForm.email.$error.pattern">invalid email</span>  */}
                                                 <div className="input-group mb-3"> 
                                                     <div className="input-group-prepend">
                                                          <div className="input-group-text"> <i className={"fa fa-envelope"}></i> </div>
                                                      </div>
                                                      <input type="email" ng-model="user.email" pattern="^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$" className="form-control form-control-lg ng-pristine ng-untouched ng-empty ng-valid-email ng-invalid ng-invalid-required ng-valid-pattern" autoComplete="new-password" name="email" placeholder="Enter Email" required=""/>
                                                   </div>
                                                   {/* <span className="error ng-hide" ng-show="(emailLoginForm.password.$touched || emailLoginForm.$submitted) &amp;&amp; emailLoginForm.password.$invalid">password field is required</span>  */}
                                                   <div className="input-group mb-3"> 
                                                       <div className="input-group-prepend">
                                                            <div className="input-group-text"> <i className="fa fa-lock"></i> </div>
                                                       </div>
                                                      <input type="password" autoComplete="new-password" ng-model="user.password" className="form-control form-control-lg ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" name="password" placeholder="Password" required=""/> 
                                                  </div>
                                                  <div className="form-group">
                                                      <button type="submit" className="btn btn-outline-success btn-block btn-lg" ng-disabled="emailLoginForm.$invalid || !emailLoginBtnNotPressed" > <span ng-hide="!emailLoginBtnNotPressed">Log in</span> 
                                                     
                                                      </button> 
                                                  </div>
                                                  <div>
                                                      <a style={{marginRight:'30px'}} href='#'>Forgot Password?</a>
                                                      <span>New Member? <a href="#">Register</a> here</span>
                                                  </div>
                                           </form>
                                        </div>
                                        :
                                          ShowPhone?
                                        <div ng-show="isPhone"> 
                                                <form name="phoneLoginForm" onSubmit={submitHandler} novalidate="novalidate" className="ng-pristine  ng-invalid ng-invalid-required ng-valid-pattern"> 
                                                    <div className="text-center p-3">
                                                        <p>PLEASE ENTER YOUR MOBILE PHONE NUMBER</p>
                                                    </div>
                                                    {/* <span className={styles.error} show="(phoneLoginForm.phone.$touched || phoneLoginForm.$submitted)&amp;&amp;phoneLoginForm.phone.$error.required">phone number is required</span>
                                                        <span className="error ng-hide" ng-show="(phoneLoginForm.phone.$touched || phoneLoginForm.$submitted)&amp;&amp;phoneLoginForm.phone.$error.pattern">Please enter a valid bangladeshi number. e.g. 01612793518</span>  */}
                                                <div className="input-group mb-3">
                                                     <div className="input-group-prepend">
                                                          <div className="input-group-text"> +88 </div>
                                                       </div>
                                                       <input value={phoneNum[0]} onChange = {changehandler} type="text" pattern="^(01\d{9})$" className="form-control form-control-lg" name="userName" placeholder="e.g 01612793518"  required/> 
                                                   </div>
                                                   <div className="form-group"> 
                                                       <button type="submit" className="btn btn-outline-success btn-block btn-lg"> Sign up/Log in </button> 
                                                   </div>
                                               </form>
                                            </div>
                                            :null
                                           
                                            

                                }
                                
                           
                                     {/* otp section starts */}
                                     {
                                         otpShow?
                                          <div  className="">
                                          <form name="otpForm" ng-submit="otpForm.$valid &amp;&amp; phoneLogin()" novalidate="" className="ng-pristine ng-invalid ng-invalid-required">
                                                <div className="text-center p-3"> 
                                     <p className=""> We’ve sent a 4-digit one time PIN to your phone: {phoneNum.userName}</p>
                                                 </div>
                                                 {/* <span className={styles.error} ng-show="(otpForm.otp.$touched || otpForm.$submitted)&amp;&amp;otpForm.otp.$error.required">OTP is required</span>  */}
                                                 <div className="input-group mb-3">
                                                         <div className="input-group-prepend"> 
                                                             <div className="input-group-text">
                                                                 <i className="fa fa-key"></i>
                                                             </div>
                                                         </div>
                                                         <input type="number" name="otp" ng-model="user.otp" className="form-control form-control-lg" autoComplete="new-password" placeholder="Please enter 4 digit OTP" required=""/> 
                                                 </div>
                                                  <div className="form-group">
                                                     <button  type="submit" className="btn btn-success btn-lg" style={{fontSize:"17px",marginRight:'5px'}}   ng-disabled="!phoneLoginBtnNotPressed || otpForm.$invalid" disabled="disabled"> 
                                                        <span ng-hide="!phoneLoginBtnNotPressed">ENTER</span>
                                                      </button>
                                                     <button ng-disabled="isResend" type="button" ng-click="resendPhoneOtp()" className="btn btn-secondary btn-lg" style={{fontSize:"17px"}}> 
                                                         {/* <span ng-show="isResend" className="ng-binding ng-hide">Request PIN Again(99)</span>  */}
                                                         <span ng-show="!isResend">SEND AGAIN</span>
                                                     </button>
                                                 </div>
                                             </form>
                                         </div> 
                                         :null
                                     }
                                                       
                                       {/* otp section starts */}




                                </div>
                                                   {/* <!-- ngIf: isEmail --> */}
                                                   <div className={styles.separator}>or</div>
                                                   <div style={{margin:"auto"}}> 
                                                       <div className={styles.g_sign_in_button} ng-click="googleInit()"> 
                                                           <div className={styles.content_wrapper}> 
                                                               <div className={styles.logo_wrapper}> 
                                                                   <img src="https://developers.google.com/identity/images/g-logo.png"/> 
                                                               </div>
                                                               <span className={styles.text_container}> 
                                                               <span>Sign in with Google</span>
                                                               </span>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div style={{margin:"auto"}}>
                                                       <div className={styles.g_sign_in_button} ng-click="facebookInit()" style={{backgroundColor: "#3B5998"}}> 
                                                          <div className={styles.content_wrapper}> 
                                                               <div className={styles.logo_wrapper}>
                                                                    <img src="/img/facebook-logo.png"/>
                                                               </div>
                                                               <span className={styles.text_container}> 
                                                               <span>Sign in with Facebook</span> 
                                                               </span> 
                                                         </div>
                                                       </div>
                                                   </div>
                                    </div>
                            </div>
                        </div>
                            
    )
}

export default LoginModal;

