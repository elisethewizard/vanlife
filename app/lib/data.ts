import postgres from 'postgres'
import type { VanShort, VanDetail, VanType, ReviewType } from './types'
import { auth } from '@/auth'
import { cacheLife, cacheTag } from 'next/cache'

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' })

export async function fetchVans(type?: VanType) {
    'use cache'
    cacheLife('hours')
    try {
        const vans = type ? 
            await sql<VanShort[]>`
            SELECT id, name, price, type, image_url
            FROM vans
            WHERE type = ${type}` : 
            await sql<VanShort[]>`
            SELECT id, name, price, type, image_url
            FROM vans`
        return vans
    } catch (error) {
        console.error('Database Error:', error)
        throw new Error('Failed to fetch vans.')
    }
}

export async function fetchVan(id: string) {
    'use cache'
    cacheLife('hours')
    try {
        const van = await sql<VanDetail[]>`
        SELECT vans.id, vans.name, vans.price, vans.type, vans.description, vans.image_url, users.name AS user_name
        FROM vans
        LEFT JOIN users 
        ON vans.host_id = users.id
        WHERE vans.id = ${id}`
        return van[0];
    } catch (error) {
        console.error('Database Error:', error)
        throw new Error('Failed to fetch van detail.')
    }
}

async function getAuthedUserId() {
    const session = await auth()
    if (!session?.user?.id) {
        throw new Error('Failed to get user id.')
    }
    return session.user.id
}

async function fetchHostVans(id: string) {
    'use cache'
    cacheTag('user')
    cacheLife('hours')
    try {
        const vans = await sql<VanDetail[]>`
        SELECT id, name, price, type, description, image_url
        FROM vans
        WHERE host_id = ${id}`
        return vans
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch host vans.');
    }
}

export async function getHostVans() {
    const id = await getAuthedUserId()
    const vans = await fetchHostVans(id)
    return vans
}

async function fetchHostReviews(id: string) {
    'use cache'
    cacheLife('hours')
    try {
        const reviews = await sql<ReviewType[]>`
        SELECT id, username, text, rating, date, van_id
        FROM reviews
        WHERE host_id = ${id}`
        return reviews
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error(`Failed to fetch host reviews.`)
    }
}

export async function getReviews() {
    const userId = await getAuthedUserId()
    const reviews = await fetchHostReviews(userId)
    return reviews
}