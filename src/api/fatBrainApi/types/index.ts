export type CreateUserRequest = {
    username: string
    password: string
    nickname?: string
}

export type UserRespons = {
    id: number
    username: string
    nickname?: string
}

export type IssueTokenRequest = {
    grantType: 'password' | 'refresh_token'
    username: string
    password: string
}

export type TokenRespons = {
    tokenType: string
    accessToken: string
    refreshToken: string
    expiresIn: number
    refreshExpiresIn: number
}

export type FeedResponse = {
    id: number
    title: string
    content: string
    feeder: UserRespons
    createdAt: Date
    updatedAt: Date
}

export type Page<T> = {
    totalPages: number
    totalElements: number
    first: boolean
    last: boolean
    size: number
    content: T[]
    number: number
    empty: boolean
}