import React , {useState} from 'react';
import {Link} from 'next/link';
import styles from './LoginModal.module.css';
import { useForm } from "react-hook-form";

// import { Alert } from 'react-bootstrap';
import axios from 'axios';
import LoginService from '../../services/loginService';




const LoginModal = ({setIsOpen}) => {

     // form control
     const [phoneNum, setphoneNum] = useState('')
     const [ShowEmail, setShowEmail] = useState(false)
     const [ShowPhone, setShowPhone] = useState(true)
     const [otpShow, setotpShow] = useState(false)
     const [showEmailPhoneBtn, setshowEmailPhoneBtn] = useState(false)
     const [showPasswordField, setshowPasswordField] = useState(false)
     const { register, handleSubmit, errors } = useForm();
     const [isEmailOtp, setisEmailOtp] = useState(false)
     const [passPlaceHolder, setpassPlaceHolder] = useState('')
     const [emailOtpPass, setemailOtpPass] = useState(true)


     const onSubmit = data =>{

        setphoneNum(data)

    
        setShowEmail(false)
        setShowPhone(false)
        otpShow?setotpShow(false):setotpShow(true)

    //    LoginService.userLogin(data)
    //    console.log("possstDattt====",data);

        //  axios.post('https://jsonplaceholder.typicode.com/posts',data2)
         axios.post('http://192.168.0.103:3000/user/login',data)
        .then(res =>{
        console.log(res);
        })
        .catch(err =>{
        console.log(err);
        })
       
     }
     const phoneOtpSubmit = data =>{
          
     const NumberAndOtp = {
         username : phoneNum.userName,
         otp : data.otp
     }
        axios.post('https://jsonplaceholder.typicode.com/posts',NumberAndOtp)
     }


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

    // submit mail
  const onSubmitMail = data =>{
    //   console.log("passsssssssss",data);
    setshowPasswordField(true)
    axios.post('http://192.168.0.103:3000/user/login',data)
    .then(res =>{
        if(res.data.status == 'emailAlreadyExist'){
            setisEmailOtp(false)
            
            setpassPlaceHolder('password')
        }
        else if('createUser'){
            setisEmailOtp(true)
            setpassPlaceHolder('otp')
        }
     
     
        })
        .catch(err =>{
        console.log(err);
        })
        // console.log('Email',data.otp);
  }
  const onSubmitMailOtp = data =>{
    axios.post('http://192.168.0.103:3000/user/login',data)
    .then(res =>{
        
        setpassPlaceHolder('password')
        // setisEmailOtp(false)
        // setemailOtpPass(true)
        // showPasswordField(false)
        // setShowEmail(false)
        setemailOtpPass(false)
        console.log("email otppp submit===",res);

    })
  .catch(err =>{

  })
}


            
      
   
    return (


       <div className="modal show" data-backdrop="static" data-keyboard="false" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" style={{paddingRight: "5px", display: "block"}}> 
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
                                <span  className="ng-hide" style={{fontSize:'20px'}}>
                                  <i className="fa fa-mobile m-2" ></i>
                                   Login with Phone number
                                </span>
                                : 
                                
                                 <span>
                                   <i className="fa fa-envelope m-2"> </i> 
                                   Login with Email
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
                                              
                                
                                                {  showPasswordField?
                                                 <form onSubmit={handleSubmit(onSubmitMailOtp)} name="emailPasswordFrom"  className=""> 

                                                    {isEmailOtp?
                                                    null
                                                    
                                                    // <div className="text-center p-3">
                                                    //    <p>PLEASE ENTER YOUR OTP CODE</p>
                                                    // </div>
                                                    :
                                                    <div className="text-center p-3">
                                                       <p>PLEASE ENTER YOUR PASSWORD</p>
                                                    </div>

                                                }
                                                   {emailOtpPass?

                                                       <div>
                                                            <div className="input-group mb-3"> 
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text"> <i className="fa fa-lock"></i> </div>
                                                            </div>
                                                            <input ref={register({required: true})}  type="password" autoComplete="new-password" className="form-control form-control-lg" name={passPlaceHolder} placeholder={`Enter Your ${passPlaceHolder}`} required=""/> 
                                                            </div>
                                                       </div>
                                                       
                                                       :
                                                       <div>
                                                            <div className="text-center p-3">
                                                                <p>PLEASE ENTER YOUR PASSWORD</p>
                                                          </div>
                                                             <div className="input-group mb-3">
                                                                        <div className="input-group-prepend"> 
                                                                            <div className="input-group-text">
                                                                                <i className="fa fa-key"></i>
                                                                            </div>
                                                                        </div>
                                                                    

                                                                        <input ref={register({required: true})} type="text" name="password1" className="form-control form-control-lg" autoComplete="new-password" placeholder="Please enter Password" required=""/> 
                                                         
                                                            </div>

                                                            <div className="input-group mb-3">
                                                                    <div className="input-group-prepend"> 
                                                                        <div className="input-group-text">
                                                                            <i className="fa fa-key"></i>
                                                                        </div>
                                                                    </div>
                                                                

                                                                    <input ref={register({required: true})} type="text" name="password2" className="form-control form-control-lg" autoComplete="new-password" placeholder="Please Re-enter Password" required=""/> 
                                                                    
                                                            </div>
                                                       </div>
                                                   }
                                                   
                                                    {/* re enter pass */}
                                
                                                    <div className="form-group">
                                                      <button type="submit" className="btn btn-outline-success btn-block btn-lg" > 
                                                      <span ng-hide="!emailLoginBtnNotPressed"> Log in</span> 
                                                     
                                                      </button> 
                                                    </div>
                                                  </form>
                                                  :
                                                  <div>
                                                  <form  onSubmit={handleSubmit(onSubmitMail)} name="emailLoginForm"  className="ng-pristine  ng-invalid ng-invalid-required ng-valid-pattern">
                                                  <div className="text-center p-3">
                                                        <p>PLEASE ENTER YOUR EMAIL</p>
                                                    </div>
                                                    {errors.email && <span className={styles.error}>REQUIRED VALID EMAIL</span>}
                                                            <div className="input-group mb-3"> 

                                                                <div className="input-group-prepend">
                                                                    <div className="input-group-text"> <i className={"fa fa-envelope"}></i> </div>
                                                                </div>
                                                                <input ref={register({required: true , pattern:/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/})} type="email"  className="form-control form-control-lg" autoComplete="new-password" name="email" placeholder="Enter Email" required=""/>
                                                            </div>
                                                            <div className="form-group">
                                                            <button type="submit" className="btn btn-outline-success btn-block btn-lg" > 
                                                            <span ng-hide="!emailLoginBtnNotPressed"> Sign up/Log in</span> 
                                                            
                                                            </button> 
                                                        </div>
                                                   </form>
                                                 </div>
                                                }
                                                
                                                   {/* {<span className="error ng-hide" ng-show="(emailLoginForm.password.$touched || emailLoginForm.$submitted) &amp;&amp; emailLoginForm.password.$invalid">password field is required</span>  } */}

                                                   
                                                  {/* <div className="form-group">
                                                      <button type="submit" className="btn btn-outline-success btn-block btn-lg" ng-disabled="emailLoginForm.$invalid || !emailLoginBtnNotPressed" > <span ng-hide="!emailLoginBtnNotPressed"> Sign up/Log in</span> 
                                                     
                                                      </button> 
                                                  </div> */}
                                                  {/* <div>
                                                      <a style={{marginRight:'30px'}} href='#'>Forgot Password?</a>
                                                      <span>New Member? <a href="#">Register</a> here</span>
                                                  </div> */}
                                           {/* </form> */}
                                        </div>
                                        :
                                          ShowPhone?
                                        <div ng-show="isPhone"> 
                                                <form name="phoneLoginForm" method='POST' onSubmit={handleSubmit(onSubmit)} className=""> 
                                                
                                                    <div className="text-center p-3">
                                                        <p>PLEASE ENTER YOUR MOBILE PHONE NUMBER</p>
                                                    </div>
                                                    {/* <span className={styles.error} show="(phoneLoginForm.phone.$touched || phoneLoginForm.$submitted)&amp;&amp;phoneLoginForm.phone.$error.required">phone number is required</span>
                                                        <span className="error ng-hide" ng-show="(phoneLoginForm.phone.$touched || phoneLoginForm.$submitted)&amp;&amp;phoneLoginForm.phone.$error.pattern">Please enter a valid bangladeshi number. e.g. 01612793518</span>  */}
                                                {errors.userName && <span className={styles.error}>Required valid Phone Number</span>}
                                                <div className="input-group mb-3">
                                                    
                                                     <div className="input-group-prepend">
                                                          <div className="input-group-text"> +88 </div>
                                                       </div>
                                                       <input ref={register({required: true,  pattern:/^(01\d{9})$/})} value={phoneNum[0]}  type="number" pattern="^(01\d{9})$" className="form-control form-control-lg" name="userName" placeholder="e.g 01612793518"  required=""/> 
                                                      
                                                   </div>
                                                   
                                                   
                                                   <div className="form-group"> 
                                                       <button type="submit" className="btn btn-outline-success btn-block btn-lg"> Sign up/Log in </button> 
                                                   </div>
                                               </form>
                                            </div>
                                            :null
                                           
                                            

                                }
                                
                           
                                     {/* {/ otp section starts /} */}
                                     {
                                         otpShow?
                                          <div  className="">
                                          <form  onSubmit={handleSubmit(phoneOtpSubmit)} name="otpForm" className="ng-pristine ng-invalid ng-invalid-required">
                                                <div className="text-center p-3"> 
                                                   <p className=""> We’ve sent a 4-digit one time PIN to your phone: {phoneNum.userName}</p>
                                                 </div>
                                                 {errors.otp && <span className={styles.error}>Required OTP</span>}

                                                 <div className="input-group mb-3">
                                                         <div className="input-group-prepend"> 
                                                             <div className="input-group-text">
                                                                 <i className="fa fa-key"></i>
                                                             </div>
                                                         </div>
                                                       

                                                         <input ref={register({required: true,  pattern:/^(\d{4})$/})} type="number" name="otp" className="form-control form-control-lg" autoComplete="new-password" placeholder="Please enter 4 digit OTP" required=""/> 
                                                 </div>
                                                  <div className="form-group">
                                                        <button  type="submit" className="btn btn-success btn-lg" style={{fontSize:"17px",marginRight:'5px'}}   > 
                                                            <span>ENTER</span>
                                                        </button>
                                                        <button type="button" className="btn btn-secondary btn-lg" style={{fontSize:"17px"}}> 
                                                            {/* { <span ng-show="isResend" className="ng-binding ng-hide">Request PIN Again(99)</span>  } */}
                                                            <span ng-show="!isResend">SEND AGAIN</span>
                                                        </button>
                                                 </div>
                                             </form>
                                         </div> 
                                         :null
                                     }
                                                       
                                       {/* {/ email otp pass section starts /} */}
                                       


                                </div>
                                                   {/* {/ <!-- ngIf: isEmail --> /} */}
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