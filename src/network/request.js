import axios from "axios"

export function request(config){
   
            const instance = axios.create({
                
                timeout:5000
        
            })
            //   2.axios的拦截器
            //  2.1  请求拦截

            instance.interceptors.request.use(config =>{
                // console.log(config)
                // 1. 比如config中的一些信息不符合服务器的要求

                // 2. 比如每次发送网络请求时，都希望在界面显示请求的图标

                // 3. 某些网络请求（比如登陆（token），必须携带一些特殊的信息）
                return config

            },err =>{
                console.log(err)

            })

            //  2.2 响应拦截 
            instance.interceptors.response.use(res => {
                console.log(res);
                return res.data
            },err =>{
                console.log(err);
            })

            return instance(config)
        

    }



