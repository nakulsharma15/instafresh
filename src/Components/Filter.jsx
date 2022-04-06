import { useFilter } from "../Filters/FilterContext"
import "./Styles/Filter.css"

export default function Filter() {

    const { state, dispatch } = useFilter();

    return (<>
        <aside className="filters flex-column">
            <div className="filters-header flex-center-sb">
                <p className="text-l bold">Filters</p>
                <button className="btn secondary-btn filter-clear-btn" onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
            </div>

            <div className="category-filter flex-column-j-c">

                <p className="category-header text-l bold">Category</p>


                <div className="filterCategory">
                    <input type="checkbox" name="category" id="fruitsVeggie"

                        value="fruits & vegetables" onChange={(e) => dispatch({ type: "CATEGORY", payload: e.target.value })}

                        checked={state.category.find((category) => category === "fruits & vegetables") ? true : false} />

                    <label htmlFor="fruitsVeggie">Fruits & Vegetables</label>
                </div>

                <div className="filterCategory">
                    <input type="checkbox" name="category" id="dairyBreakfast"

                        value="dairy & breakfast" onChange={(e) => dispatch({ type: "CATEGORY", payload: e.target.value })}

                        checked={state.category.find((category) => category === "dairy & breakfast") ? true : false} />

                    <label htmlFor="dairyBreakfast">Dairy & Breakfast</label>
                </div>

                <div className="filterCategory">
                    <input type="checkbox" name="category" id="snacksBakery"

                        value="snacks & bakery" onChange={(e) => dispatch({ type: "CATEGORY", payload: e.target.value })}

                        checked={state.category.find((category) => category === "snacks & bakery") ? true : false} />

                    <label htmlFor="snacksBakery">Snacks & Bakery</label>
                </div>

                <div className="filterCategory">
                    <input type="checkbox" name="category" id="beverages"

                        value="beverages" onChange={(e) => dispatch({ type: "CATEGORY", payload: e.target.value })}

                        checked={state.category.find((category) => category === "beverages") ? true : false} />
                    <label htmlFor="beverages">Beverages</label>
                </div>

                <div className="filterCategory">
                    <input type="checkbox" name="category" id="sweets"

                        value="sweets" onChange={(e) => dispatch({ type: "CATEGORY", payload: e.target.value })}

                        checked={state.category.find((category) => category === "sweets") ? true : false} />

                    <label htmlFor="sweets">Sweets</label>
                </div>

            </div>

            <div className="rating-filter">

                <p className="category-header text-l bold">Ratings</p>

                <div>
                    <label>1.0+</label>
                    <input
                        type="range"
                        min="1"
                        max="4"
                        value={state.rating}
                        step="1"
                        list="tickmarks"
                        onChange={(e) =>
                            dispatch({ type: "RATING", payload: e.target.value })
                        }
                    />
                    <datalist id="tickmarks">
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                        <option value="4"></option>
                    </datalist>
                    <label>4.0+</label>
                </div>
            </div>

            <div className="sort-filter">

                <p className="category-header text-l bold">Sort by</p>

                <div className="filterCategory">
                    <input type="radio" name="sort" id="low-to-high" checked={state.sortBy === "LOWTOHIGH"}
                        onChange={() => dispatch({ type: "SORTBY", payload: "LOWTOHIGH" })} />
                    <label htmlFor="low-to-high">Price - Low to high</label>
                </div>

                <div className="filterCategory">
                    <input type="radio" name="sort" id="high-to-low" checked={state.sortBy === "HIGHTOLOW"} onChange={() => dispatch({ type: "SORTBY", payload: "HIGHTOLOW" })} />
                    <label htmlFor="high-to-low">Price - High to Low</label>
                </div>
            </div>

        </aside>
    </>)

}