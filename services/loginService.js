import request2 from "../utils/request2";
import config from '../config/envConfig';


 
module.exports = {

  userLogin: async function (params) {
      console.log('sssssssssssssssssssssssssssssssssssssssssssss',  params);
        const data= await request2('/nishad', {
            method: "POST",
            data: {...params}
          
           
        });

        console.log('data========',data);
        return data;
    },







};