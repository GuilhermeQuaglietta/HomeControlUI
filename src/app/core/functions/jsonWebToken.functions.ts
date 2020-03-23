export function getTokenClaims(jwtString: string) {
    return atob(jwtString.split('.')[1]);
}
export function tokenStringToObject(jwtString: string): IJwtObject {
    return JSON.parse(jwtString);
}
export function tokenToUser(jwtObject: IJwtObject, token: string): IJwtUser {
    return {
        Name: jwtObject.Name,
        Email: jwtObject.Email,
        UID: jwtObject.UID,
        Audience: jwtObject.aud,
        Issuer: jwtObject.iss,
        ExpiresAt: new Date(jwtObject.exp * 1000),
        IssuedAt: new Date(jwtObject.iat * 1000),
        NotBefore: new Date(jwtObject.nbf * 1000),
        Token: token,
    };
}

export interface IJwtClaims {
    UID: string;
    Name: string;
    Email: string;
}

export interface IJwtObject extends IJwtClaims {
    iss: string;
    aud: string;
    nbf: number;
    exp: number;
    iat: number;
}

export interface IJwtUser extends IJwtClaims {
    Issuer: string;
    Audience: string;
    NotBefore: Date;
    IssuedAt: Date;
    ExpiresAt: Date;
    Token: string;
}