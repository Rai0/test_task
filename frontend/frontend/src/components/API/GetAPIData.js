import axios from "axios";

export default class GetAPIData {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('http://127.0.0.1:8000/api/table', {
            params: {
                page_size: limit,
                page: page
            }
        })
        console.log (response.data)
        return response.data;
    }
}