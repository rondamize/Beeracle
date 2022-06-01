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
    searchBeer(searchString) {
        return axiosInstance.get(`home/${searchString}`)
            .then(response => {
                return response.data;
            });
    }
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
            console.log(err);
        }
    },
    getComments(beerId) {
        try{
            return axiosInstance.get(`beer/${beerId}/reviews`)
                .then(response => {
                    console.log("Got comments from db: ", Date.now().toLocaleString())
                    return response.data;
                });
        }catch(err) {
            console.log(err);
        }
    },
    submitReview(beerID, userID, rating, text) {
        try{
            return axiosInstance.post(`beer/${beerID}/reviews`,
                {beer: beerID, user: userID, rating: rating, text: text})
                .then(response => {
                    console.log("Saved to db: ", Date.now().toLocaleString())
                    return response.data;
                });
        }catch(err) {
            console.log(err);
        }
    }
}

export const TopPageApi = {
    getTopBeer() {
        return axiosInstance.get(`top`)
            .then(response => {
                return response.data;
            });
    },
}

export const AuthApi = {
    me() {
        return axiosInstance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    },
    login(email, password) {
        return axiosInstance.post(`auth/login`, {email: email, password: password})
            .then(response => {
                return response.data;
            });
    },
    logout() {
        return axiosInstance.get(`auth/logout`)
            .then(response => {
                return response.data;
            });
    }
}