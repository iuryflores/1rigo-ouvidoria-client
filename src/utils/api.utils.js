import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:5000/",
    });
    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers = {
            Autorization: `Bearer ${token}`,
          };
        }
        return config;
      },
      (error) => {
        console.log(error);
      }
    );
    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          localStorage.removeItem("token");
          window.location = "/admin/login";
        }
        throw error;
      }
    );
  }
  login = async (loginInfo) => {
    try {
      const { data } = await this.api.post("/user/auth/login", loginInfo);
      localStorage.setItem("token", data.token);
    } catch (error) {
      throw error.response.data.msg;
    }
  };
  signup = async (signupInfo) => {
    try {
      const { data } = await this.api.post("/user/auth/login", signupInfo);
      return data;
    } catch (error) {
      throw error.response.data.msg;
    }
  };

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
  getDenuncias = async () => {
    try {
      const { data } = await this.api.get(`/admin/home`);
      return data;
    } catch (error) {
      throw error.response.data.msg;
    }
  };
  getDenuncia = async (id) => {
    try {
      const { data } = await this.api.get(`/admin/denuncia/${id}`);
      return data;
    } catch (error) {
      throw error.response.data.msg;
    }
  };
}

export default new Api();
