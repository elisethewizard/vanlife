export type VanType = 'simple' | 'rugged' | 'luxury'

export type VanShort = {
    id: string,
    name: string,
    price: number,
    type: VanType,
    image_url: string,
    from?: VanType | null,
}

export type VanDetail = VanShort & {
    description: string,
    user_name: string,
}

export type User = {
    name: string,
    email: string,
    password: string,
}

export type HostVanDetailBlocks = 'details' | 'pricing' | 'photos'

export type ReviewType = {
    id: number,
    username: string,
    text: string,
    rating: number | null,
    date: Date,
    van_id: string,
}