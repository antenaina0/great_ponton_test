import { z } from 'zod'

const zEmail = z.string().email()

export const isValidEmail = (email?: string) => {
    try {
        zEmail.parse(email)
        return true
    } catch {
        return false
    }
}
