import request from '../utils/request'

function allFunction(){

    return {
        getProduct : function(){
            // request("/product")
            request("/user")
        },
        productCount : function(){

        },
    }
}
export default allFunction;