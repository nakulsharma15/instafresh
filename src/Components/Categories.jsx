import "./Styles/Categories.css";
import useAxios from "../utils/useAxios";
import Loader from "./Loader";
import { useFilter } from "../Filters/FilterContext";
import { useNavigate } from "react-router-dom";

export default function Categories() {

    const { apiResponse, loading } = useAxios("/api/categories");

    const categorylist = apiResponse.categories;

    const filterNavigate = useNavigate();

    const { dispatch } = useFilter();

    const categoryHandler = (categoryName) => {
        dispatch({ type: "CLEAR" });
        dispatch({ type: "CATEGORY", payload: categoryName });
        filterNavigate("/productlisting");
    }

    return (
        <>
            <div className="categories">
                <h1>Explore different categories:</h1>

                <div className="categoryDiv">
                    {loading ? <Loader /> : categorylist.map(category => {
                        return (<div className="category flex-justify-align" key={category._id}>
                            
                            <h3 onClick={() => categoryHandler(category.categoryName)}>{category.categoryName}</h3>

                        </div>)
                    })}
                </div>

            </div>

        </>
    );
}

