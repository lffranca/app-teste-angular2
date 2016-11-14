export class HttpError extends Error {
    public message: string;

    constructor() {
        super();
    }
}