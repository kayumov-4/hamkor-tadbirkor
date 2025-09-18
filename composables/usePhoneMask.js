
export const usePhoneMask = (data) => { 
    if(data && data.length===12){
        return `${data.slice(0,3)} ${data.slice(3,5)} ${data.slice(5,8)} ${data.slice(8,10)} ${data.slice(10,12)}`
    }
    else{
     return data
    }
 }