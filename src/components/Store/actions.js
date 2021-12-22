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

const menClothesUrl =`https://fakestoreapi.com/products/category/men's clothing`
export const getMenClothes= ()=> dispatch =>{
  return axios.get(menClothesUrl).then(res =>{
    dispatch(menClothesData(res.data))
  })
}
function menClothesData(data){
  return {
    type: 'GET_MEN_CLOTHES',
    payload: {
      results: data
    }
  }
}

function womenClothesData(data){
  return {
    type: 'GET_WOMEN_CLOTHES',
    payload: {
      results: data
    }
  }
}
const womenClothesUrl =`https://fakestoreapi.com/products/category/women's clothing`
export const womenMenClothes= ()=> dispatch =>{
  return axios.get(womenClothesUrl).then(res =>{
    dispatch(womenClothesData(res.data))
  })
}

function getElectronicsData(data){
  return {
    type: 'GET_Electronics',
    payload: {
      results: data
    }
  }
}
const electronicsUrl =`https://fakestoreapi.com/products/category/electronics`
export const getElectronics= ()=> dispatch =>{
  return axios.get(electronicsUrl).then(res =>{
    dispatch(getElectronicsData(res.data))
  })
}