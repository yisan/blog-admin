import request from "@/utils/request.js";

// 查询列表
export function getList(query) {
  return request({
    url: "/list",
    method: "get",
    params: query
  });
}

// 新增、

export function insert(query) {
  return request({
    url: "/insert",
    method: "post",
    data: query
  });
}

// 删除

export function remove(query) {
  return request({
    url: "/delete",
    method: "get",
    params: query
  });
}

// 详情
export function detail(query) {
  return request({
    url: "/detail",
    method: "get",
    params: query
  });
}