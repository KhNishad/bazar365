
import Layout from '../components/Layout';
import Product_Category from '../components/Products_category';
import Did_know_banner from '../components/Did_know_banner';
import Products_category from '../components/Best_seller';
import Deal_of_day from '../components/Deal_of_day';
import Order_by_call from '../components/Order_by_call';

export default function Home() {
  return (
    <div >
         <Layout>
            <Product_Category/>
            <Did_know_banner/>
            <Products_category/>
            < Deal_of_day/>
            <Did_know_banner/>
            <Order_by_call/>
         </Layout>
         
    </div>
  )
}
