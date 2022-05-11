import * as axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    // headers: {
    //     "api-key": "45b73825-6be3-4981-821c-33679ddd684d"
    // },
    baseURL: 'http://localhost:3001/'
})

export const HomePageApi = {
    getAllBeer() {
        return axiosInstance.get(`home`)
            .then(response => {
                return response.data;
            });
    },
}

export const BeerCardApi = {
    getCurrentBeer(id) {
        // debugger;
        try{
            // debugger;
            return axiosInstance.get(`beer/${id}`)
                .then(response => {
                    // debugger;
                    return response.data;
                });
        }catch(err) {
            // debugger;
            console.log(err);
        }

    },
}

export const TopPageApi = {
    getTopBeer() {
        return axiosInstance.get(`top`)
            .then(response => {
                return response.data;
            });
    },
}