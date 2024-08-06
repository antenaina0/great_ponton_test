import { Regex } from '@constants/regex'
import { z } from 'zod'

export const personalInfo = z.object({
    firstName: z.string({
        message: 'Required',
    }),
    lastName: z.string({ message: 'Required' }),
    city: z.string(),
    postalCode: z.string().regex(Regex.postalCode, {
        message: 'Invalid postal code format',
    }),
    address: z.string({ message: 'Required' }),
    email: z
        .string({ message: 'Required' })
        .email({ message: 'Invalid email address' }),
    phone: z.string({ message: 'Required' }).regex(Regex.phoneNumber, {
        message: 'Invalid phone number format',
    }),
    password: z
        .string({ message: 'Required' })
        .regex(Regex.strongPassword, { message: 'Weak password' }),
})

export type PersonalInfo = z.infer<typeof personalInfo>
