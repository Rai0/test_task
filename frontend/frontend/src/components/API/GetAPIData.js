import axios from "axios";

export default class GetAPIData {
    static async getAll(pageSize = 10, page = 1) {
        const response = await axios.get ('http://127.0.0.1:8000/api/table?format=json', {
            params: {
                page_size: pageSize,
                page: page
            }
        })
        // console.log (response.data)
        return response.data;
    }
}