import axios from 'axios'

const trimTrailingSlash = (url = '') => url.replace(/\/$/, '')
const isProduction = process.env.NODE_ENV === 'production'
const apiBaseURL = trimTrailingSlash(process.env.API_BASE_URL || (isProduction ? 'https://mokespace.cn/weimai' : ''))

axios.defaults.withCredentials = true
axios.defaults.baseURL = apiBaseURL

export const buildAssetUrl = (path = '') => {
  if (!path || /^https?:\/\//.test(path)) {
    return path
  }
  const assetBaseURL = trimTrailingSlash(process.env.API_ASSET_BASE_URL || apiBaseURL)
  const normalizedPath = path.charAt(0) === '/' ? path : `/${path}`
  return `${assetBaseURL}${normalizedPath}`
}

export default function ajax(url='',params={},type='GET'){
  let promise;
  return new Promise(((resolve, reject) => {
    if ('GET'===type){
      let str = '';
      Object.keys(params).forEach((value,index) => {
        if (index+1===Object.keys(params).length){
          str+=value+'='+params[value];
        }else{
          str+=value+'='+params[value]+'&';
        }
      });
      url+='?'+str;
      promise = axios.get(url);
    }else if('POST'===type){
      promise = axios.post(url,params);
    }
    promise.then((response)=>{
      resolve(response.data);
    }).catch((error)=>{
      reject(error);
    });
  }))
}
