import React from "react"


function Highlights(){

    
    return(
        <div className = "flex justify-evenly items-center w-3/4 m-auto h-[50vh] text-gray-700">
            <div className="flex flex-col gap-4 items-center w-60">
                <div className="rounded-full h-40 w-40 bg-gray-400 flex items-center justify-center text-white text-4xl hover:bg-rose-600"><i className="fa-solid fa-calendar-days"></i>
                </div>
                <h3 className="border-b-2 border-rose-600 pb-3 font-semibold">SEARCH-FOR-PRODUCTS</h3>
                <p className="text-center">I can input a product name, like "Samsung A51," and the app will compile data from at least four e-commerce sites, Amazon, eBay, Shopify, and Alibaba. </p>
            </div>
            <div className="flex flex-col gap-4 items-center w-60">
                <div className="rounded-full h-40 w-40 bg-gray-400 flex items-center justify-center text-white text-4xl hover:bg-rose-600"><i className="fa-solid fa-location-dot"></i></div>
                <h3 className="border-b-2 border-rose-600 pb-3 font-semibold">ON-DEMAND RANKINGS</h3>
                <p className="text-center">The search results will be initially ranked by price in the beta version, allowing me to quickly identify the most affordable options.</p>
            </div>
            <div className="flex flex-col gap-4 items-center w-60">
                <div className="rounded-full h-40 w-40 bg-gray-400 flex items-center justify-center text-white text-4xl hover:bg-rose-600"><i className="fa-solid fa-users"></i></div>
                <h3 className="border-b-2 border-rose-600 pb-3 font-semibold">FILTERS</h3>
                <p className="text-center">I can adjust the ranking by applying filters to match my preferences. For instance, I may prioritize ratings or payment modes over price. </p>
            </div>
                  
        </div>
    )
}

export default Highlights