import {request} from "@/network/request";

export function getDetail(id){
  return request({
    url: '/detail',
    params: {
      iid: id
    }
  })
}
