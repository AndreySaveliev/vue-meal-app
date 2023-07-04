import axios from 'axios'
export const searchMealsByName = async ({commit}, keyWord) => {
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyWord}`)
  if(response.statusCode === 200) {
    response.json()
  }
  commit('setSearchedMeals', response.data.meals)
}

export const serachMealsByLetter = async ({commit}, letter) => {
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
  if(response.statusCode === 200) {
    response.json()
  }
  commit('setMealsByLetter', response.data.meals)
}

export const serachMealsByIngredients = async ({commit}, indredient) => {
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${indredient}`)
  if(response.statusCode === 200) {
    response.json()
  }
  commit('setMealsByIngredients', response.data.meals)
}