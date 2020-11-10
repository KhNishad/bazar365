
import Layout from '../components/Layout';
import Product_Category from '../components/ProductCategory/ProductsCategory';
import Did_know_banner from '../components/DidKnowBanner/DidKnowBanner';
import Deal_of_day from '../components/DealOfDay/DealOfDay';
import Order_by_call from '../components/OrderByCall/OrderByCall';
import Best_seller_product from '../components/BestSeller/bestSellerProduct'
import styles from '../components/ProductCategory/productCategory.module.css';



const products_cat = [
{
  id : 1,
  name : 'Beauty & Personal Care',
  img:'/img/makeup-f689b092-1697-4c78-b68e-629068ca6eb0.png',
  
},
{
  id : 2,
  name : ' Beverages',
  img:'/img/softdrinks-eecf6f54-ac79-4c09-a8f8-101a9f4f0e3e.png',
  
},
{
  id : 3,
  name : ' Cleaning',
  img:'/img/cleaning-0b0527e0-3e0d-40be-bef5-6f69bf0d5dbd.png',
  
},{
  id : 4,
  name : ' Beverages',
  img:'/img/softdrinks-eecf6f54-ac79-4c09-a8f8-101a9f4f0e3e.png',
  
},
{
  id : 5,
  name : ' Dairy Products',
  img:'/img/dairy-products-7bf68a36-616a-4d34-8e30-6d61d5b2f8f2.png',
  
},
{
  id : 6,
  name : 'Beauty & Personal Care',
  img:'/img/makeup-f689b092-1697-4c78-b68e-629068ca6eb0.png',
  
},
{
  id : 7,
  name : 'Foreign Products',
  img:'/img/planet-earth-85dac90a-72f5-42aa-8fa3-4124039b97e7.png',
  
},{
  id : 8,
  name : ' Dairy Products',
  img:'/img/dairy-products-7bf68a36-616a-4d34-8e30-6d61d5b2f8f2.png',
  
},
{
  id : 9,
  name : ' Dairy Products',
  img:'/img/dairy-products-7bf68a36-616a-4d34-8e30-6d61d5b2f8f2.png',
  
},
{
  id : 10,
  name : 'Beauty & Personal Care',
  img:'/img/makeup-f689b092-1697-4c78-b68e-629068ca6eb0.png',
  
}


]

const best_sell_pro = [
{
  id : 1,
  name: 'Bashundhara Kitchen Towel 2 Rolls',
  price:'৳ 45',
  img:'/img/1837-bashundhara-kitchentowel2rollsbazar365-d0011355-c616-4e41-97e8-25a795522ed8.jpg',
  plastic_icon:'/img/GoldenReward-B365-24px.jpg',
  weight:'Each'

},
{
  id : 2,
  name: 'Wheel Washing Powder 2in 1 Clean & Fresh',
  price:'৳ 450',
  img:'/img/1887-wheelwashingpowder2in1cleanfreshbazar365-4dadbd26-d407-42fc-ba14-9df3e6840a79.jpg',
  plastic_icon:'/img/GoldenReward-B365-24px.jpg',
  weight:'500 gm'

},
{
  id : 3,
  name: 'Dano Power Full Cream Instant Milk Powder Box',
  price:'৳ 350',
  img:'/img/1152-danopowerfullcreaminstantmilkpowderboxbazar365-d8d945e8-8830-46c5-a57f-678a1c6d2ffa.jpg',
  plastic_icon:'/img/GoldenReward-B365-24px.jpg',
  weight:'700 gm'

},
{
  id : 4,
  name: 'Vim Dishwashing Liquid',
  price:'৳ 150',
  img:'/img/1705-vim-dishwashingliquidbazar365-be381e3e-cd0a-4c37-86f4-ca49b193cddd.jpg',
  plastic_icon:'/img/GoldenReward-B365-24px.jpg',
  weight:'1000 ml'

},
{
  id : 5,
  name: 'Wheel Washing Powder 2in 1 Clean & Fresh',
  price:'৳ 450',
  img:'/img/1887-wheelwashingpowder2in1cleanfreshbazar365-4dadbd26-d407-42fc-ba14-9df3e6840a79.jpg',
  plastic_icon:'/img/GoldenReward-B365-24px.jpg',
  weight:'500 gm'

},

]


export default function Home() {
  return (
    <div >
         <Layout>
           <main className='container'>
           <h1 className={styles.homepage_headings} style={{marginTop:'35px;', fontFamily:'DIN pro'}}>Product Categories</h1> 
               <div className='row d-flex justify-content-center'>
               {
                products_cat.map(p =>
                  <div className='col' style={{flexGrow: 'inherit'}}>
                <Product_Category  key={p.id} {...p}/>
                </div>
                )
                } 
               </div>
           </main>
          

            <Did_know_banner/>

                <Best_seller_product/>
         
            
            < Deal_of_day/>
            <Did_know_banner/>
            <Order_by_call/>
         </Layout>
         
    </div>
  )
}
