import queryString from 'query-string';
import urlencode from 'urlencode';

import Config from '../../config/dev.json';

console.log("Config: ", Config);

function apiSelector(CurrentConfig) {
	const apiPathFragment = '/api/';
	const frontEndAPIEndpoint = apiPathFragment;
	const ApiServerUrl = CurrentConfig.API_SERVER_URL + apiPathFragment;
	// return ApiServerUrl;

	switch (CurrentConfig.name) {
		case 'development':
			// return ApiServerUrl;
			return ApiServerUrl;
		case 'production':
			return frontEndAPIEndpoint;
		default:
			return frontEndAPIEndpoint;
	}
}

class ApiService {
	constructor() {
		this.API_ENDPOINT = apiSelector(Config);
	}

	findCity(citySearch) {
		const CitySearchObject = {cityName: citySearch};
	  const cityQuery = this.API_ENDPOINT + 'city/search/?' + queryString.stringify(CitySearchObject);
	  console.log("cityQuery: ", cityQuery);
	  return fetch(cityQuery, {
	    method: 'GET',
	    headers: {
	      'Content-Type': 'application/json'
	    },
	  }).then(response => {
    	return response.json();
    });
	}

}

export default new ApiService();
