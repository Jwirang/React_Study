import fatBrainClient from "./client"
import { CreateUserRequest, IssueTokenRequest, TokenRespons, UserRespons } from "./types"

export const fetchCreateUser = async (data: CreateUserRequest): Promise<UserRespons> => {
    try{
        const response = await fatBrainClient.post('/v1/users', data)
        return response.data
    } catch (error: unknown){
        throw error
    }
}

export const fetchIssueToken = async (data: IssueTokenRequest): Promise<TokenRespons> => {
    try {
        const response = await fatBrainClient.post('/v1/auth/token', data)
        return response.data
    } catch (error: unknown){
        throw error
    }
}

export const fetchMe = async(): Promise<UserRespons> => {
    try {
        const response = await fatBrainClient.get('/v1/users/me')
        return response.data
    } catch (error: unknown){
        throw error
    }
}