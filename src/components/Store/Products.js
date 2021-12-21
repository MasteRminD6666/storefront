
const initialState = {
    categories: {
        activeCategory: '',
        categoryList: [],
    },
    products: []
    ,
    AllProducts: [],
    results: [{
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
    }]
}

export default function appState(state = initialState, action) {
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
                ...state,
                AllProducts: state.AllProducts.filter((p) => p.id !== payload)
            } 

        case 'GET':
            return{
             ...state,
             results:  payload
            };
        default:
            return state;
    }
}



