import getData from "./getData";
import randerGoods from "./randerGoods";
import { saleFilter } from "./filters";


const sale = () => {
    const checkboxInput = document.querySelector("#discount-checkbox"),
          checkboxSpan = document.querySelector(".filter-check_checkmark");



    checkboxInput.addEventListener('change', () => {
        if(checkboxInput.checked){
            checkboxSpan.classList.add('checked');
        }else {
            checkboxSpan.classList.remove('checked');
        }

        getData().then((data) => {
            randerGoods(saleFilter(data, checkboxInput.checked))
        })
    })   
}

export default sale;