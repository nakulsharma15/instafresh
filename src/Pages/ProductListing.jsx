import { Filter , Footer , Header , Card } from "../Components/index.js";

import "../App.css"

import { useFilter } from "../Filters/FilterContext";

export default function ProductListing() {

    const { filteredProductList } = useFilter();

    return (<div className="flex-column stick-bottom">

        <Header />
        <div className="productList-header flex-sb">
            <div>
                <h1>We got you covered </h1>
                <p>For all your needs</p>
            </div>

            <h4>(Products Found: <span className="products-length">{filteredProductList.length})</span></h4>
        </div>

        <div className="product-list flex-row">
            <div className="filter-div">
            <Filter />
            </div>
            
            <div className="products flex-sp-ev">
                {(filteredProductList.length !== 0) ? filteredProductList.map((item) => <div key={item._id}><Card Item={item} /></div>) : <h1>Sorry ,no items found :(</h1>}
            </div>
        </div>

        <Footer />

    </div>)
}