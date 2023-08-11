import { DatabaseEntityValues } from "@enjoys/presql/src/interface/config.js";
 

import { JwtPayload } from "jsonwebtoken";

interface UserInfoJwtPayload {
    id?: string,
    email?: string,
    role?: string,
    status?: string,
}
export interface LoginResponse {
    Token: string
    RefreshToken: string
}
export interface MailOptionsInterface{
    from?: string;
    to: string | string[];
    cc?: string | string[];
    bcc?: string | string[];
    subject: string;
    text?: string;
    html: string;
}
export interface IUser {
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: Date;
    residence: string;
    avatar: string;
    email: string;
    password: string;
    role: IRole;
    isEmailVerified: boolean;
    isProfileCompleted: boolean;
}
type IRole={}
export type IResponse<Res> = {
    message: string;
    data: {
         
    };
};
 
export type LoggingLevel = "emerg" | "alert" | "crit" | "error" | "notice" | "info" | "debug"
export type LoggingOptions = {
    file: {
        level: string;
        filename: string;
        handleExceptions: boolean;
        json: boolean;
        maxsize: number;
        maxFiles: number;
        colorize: boolean;
    };
    console: {
        level: string;
        handleExceptions: boolean;
        json: boolean;
        colorize: boolean;
        format: winston.Logform.Format;
    };
}
export interface HttpStatus {
    OK: number;
    CREATED: number;
    ACCEPTED: number;
    NO_CONTENT: number;
    BAD_REQUEST: number;
    UNAUTHORIZED: number;
    FORBIDDEN: number;
    NOT_FOUND: number;
    DUPLICATE: number;
    INTERNAL_SERVER_ERROR: number;
}
export interface HttpExceptionParams {
    name?: string, message: string, stack?: string
}