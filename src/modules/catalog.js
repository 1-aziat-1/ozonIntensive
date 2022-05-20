import getData from "./getData";
import randerGoods from "./randerGoods";
import { categoryFilter } from "./filters";

const catalog =  () => {
    const btnCatalog = document.querySelector('.catalog-button > button'),
          catalogModal = document.querySelector('.catalog'),
          catalogModalItems = document.querySelectorAll('.catalog  li');
          
          
    let isOpen = false;      

    btnCatalog.addEventListener('click', () => {
        isOpen = !isOpen;

        if(isOpen){
            catalogModal.style.display = 'block';
        }else{
            catalogModal.style.display = '';
        }     
    })

    catalogModalItems.forEach(item => {
        item.addEventListener('click', () =>{
            const text  = item.textContent
            
            getData().then((data) => {
                randerGoods(categoryFilter(data, text))
            })
        })
        
    })

}

export default catalog