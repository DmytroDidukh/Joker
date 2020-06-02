export const LOCAL_KEY = 'g2C2VRw`_<9s93_P'
export const WELCOME = {
    hi: 'Hey!',
    replica: ' Let’s try to find a joke for you:'
};

export const API = 'https://api.chucknorris.io/';
export const LINKS = {
    getCategories: 'jokes/categories',
    randomJoke: 'jokes/random',
    randomCategoryJoke: 'jokes/random?category=',
    searchQuery: 'jokes/search?query='
};
export const RADIO_DATA = ['Random', 'From category', 'Search'];
export const BUTTONS = {
    getJokeButton: {value: 'Get joke', size: 'large', variant: 'contained', color: 'default', class: 'main'},
    categoryButton: {size: 'small', variant: 'outlined', color: 'default', class: 'active'},
    jokeButton: {size: 'small', variant: 'outlined', color: 'default'},
    paginationButton: {size: 'small', variant: 'outlined', color: 'default', class: 'active'},
};

export const NO_JOKES_MESSAGES = {
    initiate: 'No jokes yet. Choose one by using query options up there ',
    notFound: 'Nothing was found for this search query ',
    noFavourites: 'You haven\'t liked any yet ',
};

export const ERROR_MESSAGES = [
    {id: '', message: 'Please, choose any option first'},
    {id: 'Search', message: 'The length of the search query should be in the range of 3 to 120 characters'},
    {id: 'From category', message: 'Please, choose a category first'},
]








