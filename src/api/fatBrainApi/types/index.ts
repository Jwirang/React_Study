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