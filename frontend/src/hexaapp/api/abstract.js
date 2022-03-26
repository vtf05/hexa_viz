export default class Abstract {
    constructor() {
        this.base = "http://localhost:8000/";}
    
    async _handleError(res) {
        const errorMsgs = {
            401: 'You don\'t have access to this resource.',
            404: 'Resource not found.',
            500: 'Error retrieving data from API!',
        };

      
        if ([200, 201, 202, 204].indexOf(res.status) === -1) {
            let original;
            try {
                original = await res.json() || {};
            } catch (e) {
                original = {};
            }
            return {
                error: true,
                msg: original.detail || original.error || original.errors || errorMsgs[res.status] || errorMsgs[500],
            };
        }

        const contentType = res.headers.get('content-type');
        const isJson = (contentType && contentType.indexOf('application/json') !== -1) && ['No Content', 'Not Found'].indexOf(res.statusText) === -1;
        return isJson ? await res.json() : res;
    }
}