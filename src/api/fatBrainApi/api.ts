import fatBrainClient from "./client"
import { CreateUserRequest, IssueTokenRequest, TokenRespons, UserRespons } from "./types"

export const createUser = async (data: CreateUserRequest): Promise<UserRespons> => {
    try{
        const respons = await fatBrainClient.post('/v1/users', data)
        return respons.data
    } catch (error: unknown){
        throw error
    }
}

export const issueToken = async (data: IssueTokenRequest): Promise<TokenRespons> => {
    try {
        const respons = await fatBrainClient.post('/v1/auth/token', data)
        return respons.data
    } catch (error: unknown){
        throw error
    }
}