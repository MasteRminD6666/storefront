import { createStore } from 'redux';


const initialState = {
    categories: {
        activeCategory: '',
        categoryList: [],
    },
    products: []
    ,
    AllProducts: []
}

function appState(state = initialState, action) {
    let { type, payload } = action
    switch (type) {


        case 'SELECT_CATEGORY':
            return {
                ...state,
                categories: { ...state.categories, activeCategory: payload },
            };
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: payload,
            };
        case 'SET_CART':
            return {
                ...state,
                AllProducts: [...state.AllProducts, ...payload],
            };

        case 'DELETE':
            return {
             
            };

        default:
            return state;
    }
}

const store = createStore(appState, initialState)


export default store;