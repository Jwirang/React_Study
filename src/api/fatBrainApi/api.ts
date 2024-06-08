import { promises } from "dns"
import fatBrainClient from "./client"
import { CreateUserRequest, UserRespons } from "./types"

export const createUser = async (data: CreateUserRequest): Promise<UserRespons> => {
    try{
        const respons = await fatBrainClient.post('/v1/users', data)
        return respons.data
    } catch (error: unknown){
        throw error
    }
}