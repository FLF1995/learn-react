import request from "../../utils/request";

export function searchRegion(params) {
  return request({
    url: "/area-service/localArea/scenicSpot",
    method: "get",
    params,
  });
}
//获取省市区
export function getArea(params) {
  return request({
    url: "/area-service/localArea/sons",
    method: "get",
    params,
  });
}

//提交新建区域
export function addNewArea(params) {
  return request({
    url: "/area-service/localArea",
    method: "post",
    params,
  });
}
