import React from 'react'

const Table=({product})=>{
    const platforms=['Jumia','Amazon','Kilimall','Shopify']
    const platformPrices={}
   platforms.forEach((platform)=>{
    const price=product[`${platform.toLowerCase()}_id`]
    if(price){
        platformPrices[platform]=price
    }
   })
   const sortedPlatforms=platforms.sort((a,b)=>{
    const priceA=platformPrices[a] ||0
    const priceB=platformPrices[b] ||0
    return priceA-priceB
   })
    return(
        <table>
            <thead>
                <tr>
                    <th>Platform</th>
                    <th>---</th>
                    <th>  Price</th>
                </tr>
            </thead>
            <tbody>
                {sortedPlatforms.map((platform)=>(
                    <tr key={platform}>
                        <td>{platform}</td>
                        <td>{platformPrices[platform]||""}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table