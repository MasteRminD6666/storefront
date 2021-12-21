const axios = require('axios');

const url = 'https://fakestoreapi.com/products/category/jewelery';

export const get = () =>  dispatch => {
  return axios.get(url).then(res => {
    dispatch(actualData(res.data))
  })
}

function actualData(data) {
  return {
    type: 'GET',
    payload: {
      results: data
    }
  }
}
function menClothesData(data){
  return {
    type: 'GET_MEN_CLOTHES',
    payload: {
      results: data
    }
  }
}
const menClothesUrl =`https://fakestoreapi.com/products/category/men's clothing`
export const getMenClothes= ()=> dispatch =>{
  return axios.get(menClothesUrl).then(res =>{
    dispatch(menClothesData(res.data))
  })
}