import {API} from '../configs/constants';

export default class Data {

    constructor() {
        this._apiBase = API;
    }

    getData = async (url) => {
        const response = await fetch(`${this._apiBase}${url}`);

        if (!response.ok) {
            throw new Error(`Couldn‘t get data from ${url}. Status: ${response.status}`);
        }

        return await response.json();
    }

    getRandomJoke = async () => {
        const randomJoke = await this.getData(`jokes/random`);
        return randomJoke
    }

    getCatagoryRandomJoke = async (catategory) => {
        const randomJoke = await this.getData(`jokes/random?category=${catategory}`);
        return randomJoke
    }

    getAllCategorys = async () => {
        const categorys = await this.getData(`jokes/categories`);
        return categorys
    }


    getAllFromSearch = async (query) => {
        const findedJokes = await this.getData(`jokes/search?query=${query}`);
        return findedJokes;
    }
}
