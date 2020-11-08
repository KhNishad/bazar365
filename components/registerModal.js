
const RegModal = ({setRegOpen})=>(

    <div className="modal-content"> 
    <div className="modal-header">
        <h5 className="modal-title">Register</h5> 
        <button type="button"  onClick= {()=> setRegOpen(false)} className="close" ng-click="closeRegisterModal()"> 
            <i className="fa fa-times"></i> 
        </button> 
    </div>
<div className="modal-body">
<div className="signup-form">
<p className="hint-text">Create your account. It's free and only takes a minute.</p>
<form name="registerForm" noValidate="" ng-submit="registerForm.$valid &amp;&amp; user.password==user.confirmPassword &amp;&amp; registerByEmail()"   className="ng-pristine ng-invalid ng-invalid-required ng-valid-email ng-valid-pattern"> 
<div className="form-group">
    <input type="text" className="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" name="first_name"  ng-model="user.first_name" placeholder="Full Name" required=""/>
    </div>
        <div className="form-group">
            <input type="email" className="form-control ng-pristine ng-untouched ng-empty ng-valid-email ng-invalid ng-invalid-required ng-valid-pattern" ng-model="user.email" name="email" pattern=" " placeholder="Enter Email" required=""/>
            
                <div className="input-group">
                    <input type="text" name="code" ng-model="user.code" className="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required"  placeholder="Verification code" required=""/> 
                    <div className="input-group-append">
                            <span className="input-group-text" style={{cursor: "pointer;", backgroundColor: "#5bb746"}}> 
                                <a ng-disabled="isResendE" ng-click="!isResendE &amp;&amp; sendEmailOtp()" href="" style={{textDecoration:"none"}}> 
                                    {/* <span ng-show="isResendE" className="ng-binding ng-hide">Request Code Again(60)</span>  */}
                                    <span ng-show="!isResendE" style={{color: "#fff"}}>SEND</span>
                                </a> 
                            </span>
                        </div>
                </div>
                            {/* <!-- ngIf: (registerForm.$submitted || registerForm.code.$touched) && registerForm.code.$invalid -->  */}
                <div className="form-group mt-3">
                        <input type="password" autoComplete="new-password" className="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" name="password" ng-model="user.password" placeholder="Password" required=""/>
                                {/* <!-- ngIf: (registerForm.password.$touched || registerForm.$submitted ) && registerForm.password.$invalid  -->  */}
                    </div>
                    <div className="form-group"> 
                        <input type="password" autoComplete="new-password" className="form-control ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched" name="confirmPassword" ng-model="user.confirmPassword" placeholder="Confirm Password" required=""/>
                                    {/* <!-- ngIf: (registerForm.$submitted || registerForm.password.$touched) && registerForm.password.$error.required --> <!-- ngIf: (registerForm.$submitted || registerForm.confirmPassword.$dirty) && (user.password !=user.confirmPassword) -->  */}
                    </div>
                    <div className="form-group"> 
                            <label className="form-check-label"> 
                                <input type="checkbox" ng-model="confirm" required="" className="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required"/> I accept the 
                                <a target="_blank" href="/termscondition">Terms of Use</a>
                                &amp; 
                                <a href="/privacypolicy" target="_blank">Privacy Policy</a> 
                            </label> 
                        <br/>
                        {/* <!-- ngIf: registerForm.$submitted && !confirm --> */}
                    </div>
            <div className="form-group">
                    <button type="submit" className="btn btn-success btn-lg btn-block" >
                        <span ng-hide="!emailRegBtnNotPressed">REGISTER</span>
                        {/* <!-- ngIf: !emailRegBtnNotPressed -->  */}
                    </button> 
            </div>
            </div>
        </form>
        
    <div className="text-center">Already have an account? 
    <a href="" ng-click="closeRegisterOpenLoginModal()" style={{color:"blue"}}>Sign in</a>
</div>
</div>
</div>
</div>


);
export default RegModal;