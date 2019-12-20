import request from '../utils/request'

export function login(params) {
  return request({
    url: "/tour-data-department/department/xinchang/user/checkPwd",
    method: "get",
    params
  });
}