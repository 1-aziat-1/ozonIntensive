import getData from "./getData";
import randerGoods from "./randerGoods";

const load = () => {

     getData().then((data) => {
         randerGoods(data)
     })
  
};

export default load;