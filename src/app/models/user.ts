export interface User {
    firstName: string;
    lastName: string;
    emailAddress: string;
    mobilePhone: string;
    registrationTime: string | null;
    lastLoginAttempt: string | null;
    existsLoginAttemps: boolean;
}