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
    grantTyp: 'password' | 'refresh_token'
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