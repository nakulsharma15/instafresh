const sortby =({sortBy},array)=>{
    switch(sortBy){
        case "HIGHTOLOW":
            return sortBy==="HIGHTOLOW"?[...array].sort((a,b)=>Number(b.price)- Number(a.price)):[...array];
        case "LOWTOHIGH":
            return sortBy==="LOWTOHIGH"?[...array].sort((a,b)=>Number(a.price)- Number(b.price)):[...array];
        default:
            return [...array]
    }

}

const rating = ({rating},array) => {
    const temp = [...array];
  return rating===0 ? temp : temp.filter((prod) => prod.rating >= rating);
}

const applyCategories = ({category},array)=>{
    if ( category.length===0){
        return array;
    }else{
        return array.filter((item)=>category.includes(item.category))
    }
}

  const applyFilters = (state,...args)=>(ProductList)=>{
    return args.reduce((acc,curr)=>{
        return curr(state,acc)
    },ProductList)
}

export const getFilteredProductList = (state,ProductList)=> applyFilters(state,sortby,rating,applyCategories)(ProductList)

