import axios, {
    AxiosError,
    AxiosInstance,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from 'axios'
import { getBearerToken } from './token'
import { API_URL } from './api_url'

interface ErrorResponse {
    message: string
    errorCode: number
}

const onRequest = (
    request: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
    const accessToken = getBearerToken()
    if (accessToken) {
        request.headers.set('Authorization', `Bearer ${accessToken}`)
    }
    return request
}

const onRequestError = (error: AxiosError): Promise<AxiosError> =>
    Promise.reject(error)

const createAuthAxiosInstance = (): AxiosInstance => {
    const instance = axios.create({
        baseURL: API_URL,
        withCredentials: true,
    })

    instance.interceptors.request.use(onRequest, onRequestError)

    instance.interceptors.response.use(
        (response) => response,
        async (error: any) => {
            if (error.response) {
                const errorResponse =
                    error.response as AxiosResponse<ErrorResponse>
                const message = errorResponse.data?.message ?? error.response
                return Promise.reject(new Error(message))
            }
            return Promise.reject(new Error('Server Error'))
        }
    )

    return instance
}

export const privateAxios = createAuthAxiosInstance()
