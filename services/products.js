import request from '../utils/request'

function allFunction(){

    return {
        getProduct : function(){
            request("/product")
        },
        productCount : function(){

        },
    }
}
export default allFunction;