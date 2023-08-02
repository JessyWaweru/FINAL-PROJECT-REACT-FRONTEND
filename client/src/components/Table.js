import React,{useState} from 'react'
import { Link } from "react-router-dom";
const Table=({product})=>{
console.log(product)
    const [sortBy,setSortBy]=useState('price')
    const platforms=['jumium','amazon','kilimall','shopify']
        const platformData=platforms.map((platform)=>{
            console.log(platform)
            const pro=[product].find((p)=>p[platform])
            if(!pro) {return <div>Loading...</div>}
            console.log(pro)
        const{price,shipping_cost,days_to_ship,review,product_location}=pro[platform]
        const costBenefit=(parseFloat(1/price)+parseFloat(1/shipping_cost)*100).toFixed(2)
        const marginalBenefit=(parseFloat(((1/days_to_ship)-(1/review))*100)).toFixed(2)
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
        FILTER RANKINGS BELOW:
       <div className='p-4'>
        <select onChange={e=>setSortBy(e.target.value)}
          className='mb-4 px-2 py-1 border rounded'>
            <option value="price">Price</option>
            <option value="costBenefit">Cost Benefit</option>
            <option value="marginalbenefit">Marginal Benefit</option>
        </select>
        <table className='w-full border-collapse'>
            <thead>
                <tr className='bg-gray-200'>
                    <th className='p-2'>RANKINGS</th>
                    <th className='p-2'>PRICE (KSH)</th>
                    <th className='p-2'>SHIPPING COST(KSH)</th>
                    <th className='p-2'>SHIPPING DAYS</th>
                    <th className='p-2'>STAR RATING</th>
                    <th className='p-2'>SHIPPED FROM</th>
                    <th className='p-2'>COST BENEFIT</th>
                    <th className='p-2'>MARGINAL BENEFIT</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map((platform,index)=>(
                    
                
                    <tr key={index} className='border-t'>
                        <td className='p-2'><Link to={`https://${platform.name}.com`}><span className=' uppercase text-red-500 font-bold underline'>{platform.name}</span></Link></td>
                        <td className='p-2'>{platform.price}</td>
                        <td className='p-2' >{platform.ShippingCost}</td>
                        <td className='p-2'>{platform.daysToShip}</td>
                        <td className='p-2'>{platform.review}</td>
                        <td className='p-2'>{platform.productLocation}</td>
                        <td className='p-2'>{platform.costBenefit}%</td>
                        <td className='p-2'>{platform.marginalBenefit}%</td>
                    </tr>
                    
                ))}
                
            </tbody>
        </table>
       </div>
       </div>
    )
}
export default Table