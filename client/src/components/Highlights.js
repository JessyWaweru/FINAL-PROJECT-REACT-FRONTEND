import React from "react"


function Highlights(){

    
    return(
        <div className = "flex justify-evenly items-center w-3/4 m-auto h-[50vh] text-gray-700">
            <div className="flex flex-col gap-4 items-center w-60">
                <div className="rounded-full h-40 w-40 bg-gray-400 flex items-center justify-center text-white text-4xl hover:bg-rose-600"><i className="fa-solid fa-calendar-days"></i>
                </div>
                <h3 className="border-b-2 border-rose-600 pb-3 font-semibold">SEARCH-FOR-PRODUCTS</h3>
                <p className="text-center">Simply enter the product name, like "Samsung A51," and our app will gather information from the four most popular e-commerce sites: Amazon, Jumium, Shopify, and Kilimall. </p>
            </div>
            <div className="flex flex-col gap-4 items-center w-60">
                <div className="rounded-full h-40 w-40 bg-gray-400 flex items-center justify-center text-white text-4xl hover:bg-rose-600"><i className="fa-solid fa-location-dot"></i></div>
                <h3 className="border-b-2 border-rose-600 pb-3 font-semibold">ON-DEMAND RANKINGS</h3>
                <p className="text-center">The search results will be automatically ranked by cost and marginal benefits, so you can quickly find the most affordable options for you.</p>
            </div>
            <div className="flex flex-col gap-4 items-center w-60">
                <div className="rounded-full h-40 w-40 bg-gray-400 flex items-center justify-center text-white text-4xl hover:bg-rose-600"><i className="fa-solid fa-users"></i></div>
                <h3 className="border-b-2 border-rose-600 pb-3 font-semibold">FILTERS</h3>
                <p className="text-center">Customize your search results by applying filters based on your preferences. You can prioritize ratings or payment modes, price, product location, shipping cost and time-frames.</p>
            </div>
            <div className="flex flex-col gap-4 items-center w-60">
                <div className="rounded-full h-40 w-40 bg-gray-400 flex items-center justify-center text-white text-4xl hover:bg-rose-600"><i className="fa-solid fa-users"></i></div>
                <h3 className="border-b-2 border-rose-600 pb-3 font-semibold">ANONYMOUS USAGE</h3>
                <p className="text-center">No need to log in or create an account to use our service. It's perfect for quick searches without any hassle.</p>
            </div>
            <div className="flex flex-col gap-4 items-center w-60">
                <div className="rounded-full h-40 w-40 bg-gray-400 flex items-center justify-center text-white text-4xl hover:bg-rose-600"><i className="fa-solid fa-users"></i></div>
                <h3 className="border-b-2 border-rose-600 pb-3 font-semibold">SEARCH HISTORY</h3>
                <p className="text-center">For users with registered accounts, Shopcrawl keeps a record of their search history. This allows them to easily revisit previous searches and findings.</p>
            </div>
                  
        </div>
    )
}

export default Highlights