import { useContext , createContext , useReducer , useEffect , useState } from "react";

import {filterReducer} from "./FilterReducer";

import { getFilteredProductList } from "./FilterFunction";

import useAxios from "../utils/useAxios";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const FilterProvider = ({children}) => {

    const [state , dispatch] = useReducer(filterReducer , {
        sortBy:"",
        rating: 1,
        category:[]
    })

    const [productList, setProductList] = useState([]);
    const { apiResponse, loading } = useAxios("/api/products");
    useEffect(() => {
        if (!loading) {
        setProductList([...apiResponse.products]);
        }
    }, [loading]);


    const filteredProductList = getFilteredProductList(state , productList);

    return (<FilterContext.Provider value={{state , dispatch , filteredProductList}}>
        {children}
    </FilterContext.Provider>)
}

export {useFilter , FilterProvider};