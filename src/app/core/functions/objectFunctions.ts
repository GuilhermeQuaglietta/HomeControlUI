export function ObjectToQueryString(obj: any) {
    return Object.keys(obj)
        .map(key => key + '=' + obj[key])
        .join('&');
}   