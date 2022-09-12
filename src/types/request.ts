/* ===========================================================================
    Type definitions for the request object
=========================================================================== */

// Header values
export type RequestHeaders = {
    [key: string]: string
}

type RequestAuth = {
    password: string
    username: string
}

// Request object configuration
export type RequestConfig = {
    auth?: RequestAuth,
    headers: RequestHeaders,
    method: string
}