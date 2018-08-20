import request from '../utils/request.js';


//  登录
export function loginByUsername(username,password){
    const data={
        username,
        password
    }
    return request({
        url:'/api/user-service/backUser/login',
        method:'post',
        data:data,
        loading:'spin'
    })
} 

// 退出
export function logout(){
    return request({
        url:'/api/user-service/backUser/logout',
        method:'post',
        loading: "spin"
    })
}

// 食谱列表
export function recipelist(page){
    return request({
        url:'/api/cms-service/recipe/list?pageNum='+page,
        method:'get',
        loading:'spin'
    })
}
// 删除食谱列表

export function deleterecipe(ids){
    return request({
        url:'/api/cms-service/recipe/delete?ids='+ids,
        method:'delete',
        loading:'spin'
    })
}

// 搜索
export function searchrecipe(query){
    return request({
        url:'/api/cms-service/es/search?'+query,
        method:'',
        loading:'spin'
    })
}

// 食谱详情
export function recipedetail(query){
    
    return request({
        url:'/api/search-service/recipe/cmsRecipeDetail?recipeId='+query,
        method:'get',
        loading:'spin'
    })
}