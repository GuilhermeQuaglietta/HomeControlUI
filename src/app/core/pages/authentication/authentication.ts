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
    Name: string,
    Password: string,
    PasswordConfirmation: string,
    Email: string
}