const initialState = {
    categories: [],
    checkedRadio: '',
    selectedCategory: '',
    searchQuery: '',
    jokes: [],
    isJokesFound: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories: [...action.payload]
            };
        case 'SET_CHECKED_RADIO':
            return {
                ...state,
                checkedRadio: action.payload
            };
        case 'SET_SELECTED_CATEGORY':
            return {
                ...state,
                selectedCategory: action.payload
            };
        case 'SET_SEARCH_QUERY':
            return {
                ...state,
                searchQuery: action.payload
            };
        case 'SET_JOKES':
            let jokes = action.payload

            if (jokes.hasOwnProperty('result')) {
                jokes = jokes.result
            } else {
                jokes = [jokes]
            }
            return {
                ...state,
                jokes: [...jokes],
                isJokesFound: !jokes.length && true
            };

        default:
            return state;
    }
}

