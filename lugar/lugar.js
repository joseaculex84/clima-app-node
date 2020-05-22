const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        headers: {
            'x-rapidapi-key': 'd273063fe5msh391b799a3d2a978p138a9cjsne350ecdd56be',
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'useQueryString': 'true'
        }
    });

    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No se pudo determinar  ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }


}

module.exports = {
    getLugarLatLng
}