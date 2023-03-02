import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "https://dead-erin-adder-shoe.cyclic.app"
      /*baseURL: "http://localhost:5000/"*/
    });
    this.api.interceptors.request.use(
      (config) => {
        const token = sessionStorage.getItem("token");
        if (token) {
          config.headers = {
            Authorization: `Bearer ${token}`
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
          sessionStorage.removeItem("token");
          window.location = "/admin/login";
        }
        throw error;
      }
    );
  }
  login = async (loginInfo) => {
    try {
      const { data } = await this.api.post("/user/auth/login", loginInfo);
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("userId", data.id);
    } catch (error) {
      throw error.response.data.msg;
    }
  };
  signup = async (signupInfo) => {
    try {
      const { data } = await this.api.post("/user/auth/signup", signupInfo);
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
      console.log({ data });
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
  sendMessageUser = async (protocolo_id, pass_protocolo, messageUser, user) => {
    try {
      const { data } = await this.api.patch(
        `/track-complaint/${protocolo_id}/${pass_protocolo}`,
        messageUser, user
      );
      return data;
    } catch (error) {
      throw error.response.data.msg;
    }
  };

  /*ADMIN FUNCTIONS*/
  getAuditById = async (complaintId) => {
    try {
      const { data } = await this.api.get(`/admin/denuncia/${complaintId}`);
      return data;
    } catch (error) {
      throw error.response.data.msg;
    }
  };
  addAudit = async (denunciaId, userId) => {
    try {
      const { data } = await this.api.post(
        `/admin/denuncia/${denunciaId}`,
        userId
      );
      return data;
    } catch (error) {
      throw error.response.data.msg;
    }
  };
  endAudit = async (denunciaId, userId, tipo) => {
    try {
      const { data } = await this.api.patch(
        `/admin/denuncia/${denunciaId}`,
        tipo,
        userId
      );
      return data;
    } catch (error) {
      throw error.response.data.msg;
    }
  };
  sendMessage = async (id, messageUser, userId) => {
    try {
      const { data } = await this.api.patch(
        `/admin/denuncia/${id}`,
        messageUser,
        userId
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
  getAllDenuncias = async () => {
    try {
      const { data } = await this.api.get(`/admin/denuncias/`);
      return data;
    } catch (error) {
      throw error.response.data.msg;
    }
  };
  getDenunciasByStatus = async (status) => {
    try {
      const { data } = await this.api.get(`/admin/denuncias/status/${status}`);
      return data;
    } catch (error) {
      throw error.response.data.msg;
    }
  };
}

export default new Api();
