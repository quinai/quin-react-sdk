import {Platform} from 'react-native';
import {Logger} from './Logger';

class Http{
    static configuration = {
        url: 'https://g.quinengine.com/api/v1/'
    }

    static instance = new Http();

    static getInstance(){
        return Http.instance;
    }

    static setConfig(apiKey, domain){
        Http.configuration.apiKey = apiKey;
        Http.configuration.domain = domain;
    }

    post(path,body){
        try{
            const request = this.request(path, 'POST', body);
            if (!request){
                Logger.log('quin http post: request error');
                return;
            }
            return this.execute(request,path);
        }catch (error){
            Logger.log('quin http post error: ${error}');
            return;
        }
    }

    get (path){
        try{
            const request = this.request(path,'GET');
            if(!request){
                Logger.log('quin http get: request error');
                return;
            }
            return this.execute(request, path);
        }catch(error){
            Logger.log('quin http get error: ${error}');
            return
        }
    }

    request(path, method, body){
        try{
            const url = Http.configuration.url + path;
            Logger.log(url);

            const headers = {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            }
        
            if (Http.configuration.domain){
                headers['Origin'] = Http.configuration.domain;
            }
            if (Http.configuration.apiKey){
                headers['X-Api-Key'] = Http.configuration.apiKey;
            }

            const request = {
                method,
                headers
            };

            if (body){
                request.body = JSON.stringify(body);
            }

            return request;
        }   catch(error){
            Logger.Log(`quin request error: ${error}`);
            return null;
        }
    }

    execute(request, path){
        try{
            const url = Http.configuration.url + path;
            const response = fetch(url, request);

            if(response.status !== 200){
                Logger.log('quin httpHandler: error statusCode: ${response.status}');
                return
            }

            const data = response.JSON();

            if(completion){
                completion(data);
            }
        }   catch(error){
            Logger.log(`quin execute error: ${error}`);
        }
    }
}