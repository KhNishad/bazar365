import request from '../utils/request';


module.exports = {
    getProducts: async function (){
        const data = await request('/product');
        // console.log(data.data.length);
        let arr = data.data;
        arr.length = 5  
        return arr
    }
}