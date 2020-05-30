export const welcome = {
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
};

export const ERROR_MESSAGES = [
    {id: '', message: 'Please, choose any option first'},
    {id: 'Search', message: 'Search query should be from 3 to 120 symbols'},
    {id: 'From category', message: 'Please, choose a category first'},
]








