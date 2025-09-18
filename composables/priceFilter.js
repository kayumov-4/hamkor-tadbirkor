
export const priceFilter = (data) => { 
    if(data){
         return data && data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }
    else{
     return data
    }
 }