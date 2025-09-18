
export const useApiFetch = (path, options) => {   
  let headers={
    ...useRequestHeaders()
  }  
  return useFetch(path, {
    baseURL:"https://cabinet.loyihalar-fabrikasi.uz/services/platon-core/",
    headers:headers,
    ...options
    })
}