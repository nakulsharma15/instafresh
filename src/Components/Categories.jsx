import "./Styles/Categories.css";
import useAxios from "../utils/useAxios";
import React from "react";

export default function Categories() {

    const {apiResponse , loading} = useAxios("/api/categories");

    const categorylist = apiResponse.categories;


    return (
        <>
            <div className="categories">
                <h1>Explore different categories:</h1>

                <div className="categoryDiv">
                {loading ? <h1>Loading...</h1> : categorylist.map(category => {return(<div className="category flex-justify-align" key={category._id}>
                      <h3 onClick={() => categoryHandler(category.categoryName)}>{category.categoryName}</h3>
                  </div>)})} 
                </div>
                                                
            </div>

        </>
    );
}