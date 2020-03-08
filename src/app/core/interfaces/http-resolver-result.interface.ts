export interface IHttpResolverResult<T> {
    errorMessage?: string;
    httpStatusCode: number;
    content: T;
}
