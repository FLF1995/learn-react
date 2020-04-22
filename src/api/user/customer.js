import request from "../../utils/request";

//获取客户信息列表
export function getCustomerTableData(params) {
	return request({
		url: "/unit/organization",
		method: "get",
		params,
	});
}

//删除客户信息
export function deleteCustomerData(id) {
	return request({
		url: `/unit/organization/${id}`,
		method: "delete"
	});
}
