import {API, LINKS, RADIO_DATA} from '../configs/constants'

export default async (checkedRadio, selectedCategory, searchQuery) => {
    const [byRandom, byCategory, bySearch] = RADIO_DATA;

    let link = API;

    switch (checkedRadio) {
        case byRandom:
            link += LINKS.randomJoke
            break;
        case byCategory:
            link += LINKS.randomCategoryJoke + selectedCategory
            break;
        case bySearch:
            link += LINKS.searchQuery + searchQuery
            break;
        default:
            return
    }

    const jokes = await fetch(link)
        .then(data => data.json())
        .catch(e => window.alert(`You broke me! Try again. Error: ${e}, status: ${e.status}`))

    return jokes;
}

