import React,{useState} from 'react'

const Table=({product})=>{
console.log(product)
    const [sortBy,setSortBy]=useState('price')
    const platforms=['jumium','amazon','kilimall','shopify']
        const platformData=platforms.map((platform)=>{
            const pro=product.find((p)=>p[platform])
            if(!pro) {return <div>Loading...</div>}
        
            

        const{price,shipping_cost,days_to_ship,review,product_location}=pro[platform]

        const costBenefit=parseFloat(1/price)+parseFloat(1/shipping_cost)
        const marginalBenefit=(1/days_to_ship)+review
        return{
            name:platform,
            price:price,
            ShippingCost:shipping_cost,
            daysToShip:days_to_ship,
            review:review,
            productLocation:product_location,
            costBenefit:costBenefit,
            marginalBenefit:marginalBenefit
            
        }
    }).filter(Boolean)
    
          
      const sortData=(data)=>{
        return data.sort((a,b)=>b[sortBy]-a[sortBy])
      }      
     
      const sortedData=sortData(platformData)

    platformData.sort((a,b)=>b[sortBy]-a[sortBy])
    
    return(
       <div>
        <select onChange={e=>setSortBy(e.target.value)}>
            <option value="price">Price</option>
            <option value="costBenefit">Cost Benefit</option>
            <option value="marginalbenefit">Marginal Benefit</option>
        </select>
        <table>
            <thead>
                <tr>
                    <th>RANKINGS</th>
                    <th>PRICE</th>
                    <th>SHIPPING COST</th>
                    <th>DAYS TO SHIP</th>
                    <th>REVIEW</th>
                    <th>PRODUCT LOCATION</th>
                    <th>COST BENEFIT</th>
                    <th>MARGINAL BENEFIT</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map((platform,index)=>(
                    <tr key={index}>
                        <td>{platform.name}</td>
                        <td>{platform.price}</td>
                        <td>{platform.ShippingCost}</td>
                        <td>{platform.daysToShip}</td>
                        <td>{platform.review}</td>
                        <td>{platform.productLocation}</td>
                        <td>{platform.costBenefit.toFixed(2)}</td>
                        <td>{platform.marginalBenefit.toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
       </div>
    )
}

export default Table