import request from "../../utils/request";

export function searchRegion(params) {
  return request({
    url: "/area-service/localArea/scenicSpot",
    method: "get",
    params,
  });
}
