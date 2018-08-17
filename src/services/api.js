import request from '@/utils/request.js';


export function loginByUsername(username,passworld){
    const data={
        username,
        passworld
    }
    return request({
        url:'/api/user-service/backUser/login',
        methods:'post',
        data:data,
        loading:'spin'
    })
} 