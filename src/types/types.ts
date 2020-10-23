export interface ResponseSuccess {
    success: boolean
}

export interface FullProfile {
    id: number
    name: string | null
    surname: string | null
    birthday: string | null
    avatar: string | null
    phone: {
        code: number | null,
        number: number | null
    }
    address: {
        state: string | null,
        city: string | null
    }
}