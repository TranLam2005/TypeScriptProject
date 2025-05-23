import axios from "axios";
import type {AxiosInstance, InternalAxiosRequestConfig} from "axios";
import {
    TOKEN_TYPE,
    getTokenFromCookie,
} from "../feature/user/state/cookies";

const API_URL = import.meta.env.VITE_API_URL as string;


export const restApi: AxiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 30_000,
    headers: {
        "Content-Type": "application/json"
    },
    validateStatus: () => true,
});

restApi.interceptors.request.use (
    (config: InternalAxiosRequestConfig) => {
        const token = getTokenFromCookie(TOKEN_TYPE.ACCESS_TOKEN);
        if (token) {
            config.headers!["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

restApi.interceptors.response.use (
    (response) => {
        if (response.data && typeof response.data === "object") {
            if (response.data.code === CommonError.INTERNAL_SERVER.code) {
                response.data.message = CommonError.INTERNAL_SERVER.message;
            }
        }
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
)


export interface Pagination {
    page: number;
    size: number;
    total: number;
}

export interface BaseResponse<T = null> {
    code: number;
    message: string;
    data?: T;
    pagination?: Pagination;
    error?: Record<string, string>;
}

export const CommonError = {
    SUCCESS: { code: 200, message: "success" },
    BAD_REQUEST: { code: 400, message: "bad_request" },
    UNAUTHORIZED: { code: 401, message: "unauthorized" },
    FORBIDDEN: { code: 403, message: "forbidden" },
    NOT_FOUND: { code: 404, message: "not_found" },
    CONFLICT: { code: 409, message: "conflict" },
    INTERNAL_SERVER: { code: 500, message: "internal_server" },
  };