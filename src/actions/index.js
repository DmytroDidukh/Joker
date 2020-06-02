export const setCategories = (categories) => ({
    type: 'SET_CATEGORIES',
    payload: categories
})

export const setCheckedRadio = (radioValue) => ({
    type: 'SET_CHECKED_RADIO',
    payload: radioValue
})

export const setSelectedCategory = (selectedCategoryValue) => ({
    type: 'SET_SELECTED_CATEGORY',
    payload: selectedCategoryValue
})

export const setJokes = (jokes) => ({
    type: 'SET_JOKES',
    payload: jokes
})

export const setSearchQuery = (value) => ({
    type: 'SET_SEARCH_QUERY',
    payload: value
})

export const setFavoriteJoke = (joke) => ({
    type: 'SET_FAVORITE_JOKE',
    payload: joke
})

export const setFavoritesVisibility = () => ({
    type: 'SET_FAVORITES_VISIBILITY'
})

export const removeFavoriteJoke = (id) => ({
    type: 'REMOVE_FAVORITE_JOKE',
    payload: id
})

export const removeAllFavoritesJokes = () => ({
    type: 'REMOVE_ALL_FAVORITES_JOKES',
})
