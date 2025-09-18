export const useApi = (path, options = {}) => {
	options.baseURL = 'https://cabinet.tadbirkor-ayol.uz/services/platon-core/'
	return $fetch(path, { ...options })
}
