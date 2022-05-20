import getData from "./getData";
import randerGoods from "./randerGoods";
import { searchFilter } from "./filters";

const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input')

    searchInput.addEventListener('input', (event) => {
        const value = event.target.value

        getData().then((data) => {
            randerGoods(searchFilter(data, value))
        })
    })
}

export default search