
import request from '../utils/request';

module.exports = {
    getAddBanners: async function(){
        const data = await request('/settings')
        //  console.log('settings data============',data.data[0].main_banner[0]);
        // console.log('settings data============',data.data[0].adBannerTop[0]);
        return data.data[0].main_banner[0];
    }
}