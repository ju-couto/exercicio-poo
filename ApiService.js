const API_URL = process.env.API_URL

module.exports = class ApiService {
    save(data) {
        fetch(API_URL, { method: "POST", data })
    }
}