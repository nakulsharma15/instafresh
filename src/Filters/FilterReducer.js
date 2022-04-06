export const filterReducer = (state , action)=> {

    const defaultState = {sortBy:"", rating:1, category:[]};

    switch(action.type) {

        case "SORTBY": return {...state , sortBy: action.payload};

        case "RATING": return {...state , rating: action.payload};

        case "CATEGORY": const {category} = state;
        if(category.includes(action.payload)){
            return {...state, category : category.filter((item)=>item!==action.payload)}
        }
        else{
            return {...state, category: [...category,action.payload]}
        }

        case "CLEAR": return defaultState;

        default: return state;
    }
}
