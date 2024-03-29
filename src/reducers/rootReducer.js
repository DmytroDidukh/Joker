import {LOCAL_KEY} from '../configs/constants'

const initialState = {
    categories: [],
    checkedRadio: '',
    selectedCategory: '',
    searchQuery: '',
    jokes: [],
    favoritesJokes: [],
    isJokesFound: false,
    isFavoritesVisible: true,
};

export default (state = initialState, action) => {
    const setToLocalStorage = (jokes) => {
        localStorage.setItem(LOCAL_KEY, JSON.stringify([...jokes]))
    }

    const getPaginationButtonsCount = (jokes) => {
        const paginationLength = Math.ceil(jokes.length / 10);
        return Array(paginationLength).fill(1).map((val, i) => val + i);
    }

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
            let jokes = action.payload;

            //checks if got from API more than one joke
            if (jokes.hasOwnProperty('result')) {
                jokes = jokes.result
            } else {
                jokes = [jokes]
            }
            return {
                ...state,
                jokes: [...jokes],
                isJokesFound: !jokes.length && true,
                paginationButtonsCount: getPaginationButtonsCount(jokes)
            };
        case 'SET_FAVORITE_JOKE':
            // sets one or more jokes
            const favoritesJokes = [...state.favoritesJokes, ...action.payload];
            setToLocalStorage(favoritesJokes)

            console.log(getPaginationButtonsCount(favoritesJokes), 'dypa')
            return {
                ...state,
                favoritesJokes: favoritesJokes,
                favPaginationButtonsCount: getPaginationButtonsCount(favoritesJokes)
            };
        case 'REMOVE_FAVORITE_JOKE':
            const newFavoritesJokes = state.favoritesJokes.filter(joke => joke.id !== action.payload);
            setToLocalStorage(newFavoritesJokes)

            return {
                ...state,
                favoritesJokes: newFavoritesJokes
            };
        case 'REMOVE_ALL_FAVORITES_JOKES':
            localStorage.clear()

            return {
                ...state,
                favoritesJokes: []
            };
        case 'SET_FAVORITES_VISIBILITY':
            return {
                ...state,
                isFavoritesVisible: !state.isFavoritesVisible
            };
        default:
            return state;
    }
}
