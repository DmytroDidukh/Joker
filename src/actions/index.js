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
