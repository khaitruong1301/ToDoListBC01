export class BaseService {
    constructor(){

    }
    post = (url,data) => {
        const promise = axios({
            url:url,
            method:'POST',
            data:data
        });
        return promise;
    };

    get = (url) => {
        const promise = axios({
            url:url,
            method:'GET'
        });
        return promise;
    }

    put = (url,data) => {
        const promise = axios({
            url:url,
            method:'PUT',
            data:data
        });
        return promise;
    }

    delete = (url) => {
        const promise = axios({
            url:url,
            method:'DELETE'
        })
        return promise;
    }   
}
console.log('Mình là userB Sĩ');

  

console.log('khải spam')
console.log('khải spam')
console.log('khải spam')
console.log('khải spam')
console.log('khải spam')
