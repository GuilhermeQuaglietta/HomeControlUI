export interface ILogin {
    email: string;
    password: string;
}

export interface IChangePassword {
    recoveryKey: string,
    newPassword: string,
    newPasswordConfirmation: string,
}

export interface ILoginCreate {
    name: string,
    password: string,
    passwordConfirmation: string,
    email: string
}