export interface ILogin {
    email: string;
    password: string;
}

export interface IChangePassword {
    recoveryKey: string,
    newPassword: string,
    newPasswordConfirmation: string,
}