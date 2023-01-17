import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:5000/",
    });
  }
  addComplaint = async (complaintData, category) => {
    try {
      const { data } = await this.api.post(
        `/addForm/${category}`,
        complaintData
      );
      return data;
    } catch (error) {
      throw error.response.data.msg;
    }
  };
}

export default new Api();
