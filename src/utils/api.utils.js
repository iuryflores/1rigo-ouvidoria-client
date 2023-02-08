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
        `/add-complaint/${category}`,
        complaintData
      );
      console.log(data);
      return data;
    } catch (error) {
      throw error.response.data.msg;
    }
  };
  checkPassword = async (protocolo_id, senha) => {
    try {
      const { data } = await this.api.post(
        `/track-complaint/${protocolo_id}/${senha}/`
      );
      return data;
    } catch (error) {
      throw error.response.data.msg;
    }
  };

  trackComplaint = async (protocolo_id, pass_protocolo) => {
    try {
      const { data } = await this.api.get(
        `/track-complaint/${protocolo_id}/${pass_protocolo}`
      );
      return data;
    } catch (error) {
      throw error.response.data.msg;
    }
  };
}

export default new Api();
