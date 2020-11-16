import request from "../utils/request";
import config from '../config/envConfig';

 
module.exports = {
    getProductCategories: async function () {
        const data = await request('/product').then(res =>{
      
            //  console.log('data',res.data[20].productName);
        }).catch(err=>{
            console.log('some fetching error');
        })

        // const data= axios.get('http://192.168.0.107:3000/category/all').then(res=>{
        //     console.log('data=====',res);
        // }).catch(err=>{
        //     console.log('error',err)
        // })
        // console.log('service category ==', data);
        // console.log('type of data==',typeof data)

        //   console.log('i m return');
        return data;
    },

    getCategoriesAll: async function (params) {
        return request(
            '/category?where={"parent_category":null}&populate=child_categories&limit=999&sort=priority%20ASC',
            {
                params
            }
        );
    },

    getCategorybySlug: async function(params){
        let url="/category";
        if (params){
            if(params.hasOwnProperty("query")){
                if(params.query.hasOwnProperty("slug"))
                {
                    url = `/category?where={"slug":"${params.query.slug}"}&populate=child_categories`;
                }
            }
        }
        console.log("slugurl: ", url);
        return request(
            url,
            {
                params
            }
        );
    },

    pagination: async function (params) {
        return request(
            `/category?where=${params.where}&limit=${params.limit}&populate=child_categories&sort=priority%20ASC`,
            {
                params
            }
        );
    },

    removeCategory: async function (params) {
        return request(`/category/${params}`, {
            method: "PATCH",
            data: {
                deleted: true
            }
        });
    },

    addCat: async function (params) {
        return request(`/category`, {
            method: "POST",
            data: {...params}
        });
    },

    updateCat: async function (params) {
        let {id, ...data} = params;
        params = data;
        return request(`/category/${id}`, {
            method: "PATCH",
            data: {
                ...params
            }
        });
    },

    getAllNoPupulate: async function (params) {
        return request(`/category?populate=false&isPublish=true&limit=9999`, {});
    }
};

