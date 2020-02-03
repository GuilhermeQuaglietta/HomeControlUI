export function getTokenClaims(jwtString: string) {
    return atob(jwtString.split('.')[1]);
}
export function tokenStringToObject(jwtString: string): IJwtObject {
    return JSON.parse(jwtString);
}
export function tokenToUser(jwtObject: IJwtObject): IJwtUser {
    return {
        UserName: jwtObject.UserName,
        Audience: jwtObject.aud,
        Issuer: jwtObject.iss,
        ExpiresAt: new Date(jwtObject.exp * 1000),
        IssuedAt: new Date(jwtObject.iat * 1000),
        NotBefore: new Date(jwtObject.nbf * 1000)
    };
}

export interface IJwtObject {
    UserName: string;
    iss: string;
    aud: string;
    nbf: number;
    exp: number;
    iat: number;
}

export interface IJwtUser {
    UserName: string;
    Issuer: string;
    Audience: string;
    NotBefore: Date;
    IssuedAt: Date;
    ExpiresAt: Date;
}