import axios from 'axios'

const service = axios.create({
  baseURL: "http://192.168.1.116/api/",
  timeout: 5000,
});

service.interceptors.request.use(
	config=>{
		const token = localStorage.getItem("token");
		if (token) {
      config.headers["X-Token"] = token;
    }
		return config
	},
	error=>{
		Promise.reject(error)
		alert(error)
	}
)
service.interceptors.response.use(
  response => response,
  error => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;