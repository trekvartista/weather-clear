import axios from "axios";

export const ipAPI = {
    getCurrentIP: () => {
        return axios.get(`https://api.ipify.org/?format=json`)
    },
    getIpInfo: (ip) => {
        return axios.get(`https://ipinfo.io/${ip}?token=${'533ebd7fee8587'}`)
    }
}