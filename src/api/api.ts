import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "8cb29b96-1ff9-457a-9229-34cee0202934"
  }
})

export const usersAPI = {
  getUsers(page: number, count: number) {
    return axiosInstance
      .get(`users?page=${page}&count=${count}`)
      .then(res => res.data)
  },

}