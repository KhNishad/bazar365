import request from "../utils/request";
import config from '../config/envConfig';

 
module.exports = {
    getProductCategories: async function () {
        const data = await request('/product/getcategorytree')

        // console.log("mydattaaaa",data.data.categoryTree[0]);
        return data.data.categoryTree;
    },

    // getCategoriesAll: async function (params) {
    //     return request(
    //         '/category?where={"parent_category":null}&populate=child_categories&limit=999&sort=priority%20ASC',
    //         {
    //             params
    //         }
    //     );
    // },

    // getCategorybySlug: async function(params){
    //     let url="/category";
    //     if (params){
    //         if(params.hasOwnProperty("query")){
    //             if(params.query.hasOwnProperty("slug"))
    //             {
    //                 url = `/category?where={"slug":"${params.query.slug}"}&populate=child_categories`;
    //             }
    //         }
    //     }
    //     console.log("slugurl: ", url);
    //     return request(
    //         url,
    //         {
    //             params
    //         }
    //     );
    // },

    // pagination: async function (params) {
    //     return request(
    //         `/category?where=${params.where}&limit=${params.limit}&populate=child_categories&sort=priority%20ASC`,
    //         {
    //             params
    //         }
    //     );
    // },

    // removeCategory: async function (params) {
    //     return request(`/category/${params}`, {
    //         method: "PATCH",
    //         data: {
    //             deleted: true
    //         }
    //     });
    // },

    // addCat: async function (params) {
    //     return request(`/category`, {
    //         method: "POST",
    //         data: {...params}
    //     });
    // },

    // updateCat: async function (params) {
    //     let {id, ...data} = params;
    //     params = data;
    //     return request(`/category/${id}`, {
    //         method: "PATCH",
    //         data: {
    //             ...params
    //         }
    //     });
    // },

    // getAllNoPupulate: async function (params) {
    //     return request(`/category?populate=false&isPublish=true&limit=9999`, {});
    // }
};

