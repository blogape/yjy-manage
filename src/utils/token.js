const TokenKey='user';
export function getToken(){
    return localStorage.getItem(TokenKey)
}

export function setToken(token) {
    let tokens=JSON.stringify(token);
    localStorage.setItem(TokenKey,tokens)
  }
  
  export function removeToken() {
    localStorage.removeItem(TokenKey)
  }