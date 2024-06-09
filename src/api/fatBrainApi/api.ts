import fatBrainClient from "./client"
import { CreateFeed, CreateUserRequest, FeedResponse, IssueTokenRequest, Page, TokenRespons, UserRespons } from "./types"

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

export const fetchMe = async (): Promise<UserRespons> => {
    try {
        const response = await fatBrainClient.get('/v1/users/me')
        return response.data
    } catch (error: unknown){
        throw error
    }
}

export const fetchFeeds = async(page: number, size: number): Promise<Page<FeedResponse>> => {
    try {
        const response = await fatBrainClient.get(`/v1/users/me/feeds?page=${page}&size=${size}`)
        return response.data
    } catch (error: unknown){
        throw error
    }
}

export const fetchCreateFeed = async (data: CreateFeed): Promise<FeedResponse> => {
    try {
        const response = await fatBrainClient.post('/v1/feeds', data)
        return response.data
    } catch (error: unknown) {
        throw error
    }
}

export const fetchFindFeed = async (id: number): Promise<FeedResponse> => {
    try {
        const response = await fatBrainClient.get(`/v1/feeds/${id}`)
        return response.data
    } catch (error: unknown) {
        throw error
    }
}