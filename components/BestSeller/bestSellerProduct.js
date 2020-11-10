import Product_cart from '../../components/ProductCart/productCart';
import styles from './BestSeller.module.css';


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

const BestSellerProduct = () =>{

    return (
        <section  className={styles.section_container} style={{padding: "0px;", marginTop:" 10px;",backgroundColor:'#F7F7F7'}}>
        <div className={styles.wrapper}>
            <div className={`${styles.myflash}  alert alert-dismissable speechwarning`}>
            <div className="container text-center">
                <h3 style={{margin:"0;"}} className={styles.homepage_headings}>B365 Best Sellers</h3>
                <a  className="btn btn-success"  href="/products/featured_products" target="_self" >View All</a>
            </div>
            </div>
        </div>
        <main className='container'>

            <div className='row d-flex justify-content-center'>
                {
                  best_sell_pro.map(pro =>
                    <div className={styles.col_item} style={{flexGrow: 'inherit'}}>
                  < Product_cart key={pro.id} {...pro}/>
                  </div>
                  )
                  } 
            </div>

       </main>
  </section>
    )
}
export default BestSellerProduct;