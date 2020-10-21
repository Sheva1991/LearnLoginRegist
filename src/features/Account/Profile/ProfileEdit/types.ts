
export interface FullProfileFormValues {
    id?: number
    name?: string | null
    surname?: string | null
    birthday?: string | null
    avatar?: File | null
    phone: {
        code?: number | null,
        number?: number | null
    }
    address: {
        state?: string | null,
        city?: string | null
    }
}