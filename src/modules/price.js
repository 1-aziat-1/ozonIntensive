import getData from "./getData";
import randerGoods from "./randerGoods";
import { priceFilter,saleFilter} from "./filters";

const price = () =>{

    const priceMin = document.getElementById("min"),
          priceMax = document.getElementById("max"),
          checkboxInput = document.querySelector("#discount-checkbox"),
          checkboxSpan = document.querySelector(".filter-check_checkmark");
   
    
    priceMin.addEventListener('input', () => {

        getData().then((data) => {
            randerGoods(priceFilter(saleFilter(data, checkboxInput.checked), priceMin.value, priceMax.value))
        })
    })

    priceMax.addEventListener('input', () => {
        getData().then((data) => {
            randerGoods(priceFilter(saleFilter(data, checkboxInput.checked), priceMin.value, priceMax.value))
        })
    })

    checkboxInput.addEventListener('change', () => {
        if(checkboxInput.checked){
            checkboxSpan.classList.add('checked');
        }else {
            checkboxSpan.classList.remove('checked');
        }

        getData().then((data) => {
            randerGoods(priceFilter(saleFilter(data, checkboxInput.checked), priceMin.value, priceMax.value))
        })
    })   
}

export default price;