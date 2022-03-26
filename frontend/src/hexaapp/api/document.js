import Abstract from "./abstract";

export default class Document extends Abstract  {
    constructor() {
        super();
        this.endpoint = this.base.concat("api/v1/blog/comment/");
    }

    /**
     * Helper to load the list of posts
     * @returns {object} response
     */
    async getList(postId) {
        console.log(
            "request will be made and the value of access_token is ",
            this.accessToken
        );
        const endpoint = this.endpoint.concat(?post=${postId});
        const accessToken = localStorage.getItem("access_token") || {}; // this is getting repeated every where find a solution.
        const res = await fetch(endpoint, {
            headers: {
                Authorization: Basic,
            },
        });
        return this._handleError(res);
    }

    async create(obj) {
        const accessToken = localStorage.getItem("access_token") || {}; // this is getting repeated every where find a solution.
        const res = await fetch(this.endpoint, {
            headers: {
                "Content-Type": "application/json",
                Authorization: Bearer ${accessToken},
            },
            method: "POST",
            body: JSON.stringify(obj),
        });
        return this._handleError(res);
    }
}