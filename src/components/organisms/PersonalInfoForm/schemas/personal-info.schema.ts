import { Regex } from '@constants/regex'
import { z } from 'zod'

const REQUIRED_MESSAGE = 'Required'

export const personalInfo = z.object({
    firstName: z
        .string({
            message: REQUIRED_MESSAGE,
        })
        .min(1, REQUIRED_MESSAGE),
    lastName: z.string({ message: REQUIRED_MESSAGE }).min(1, REQUIRED_MESSAGE),
    city: z.string().min(1, REQUIRED_MESSAGE),
    postalCode: z.string().regex(Regex.postalCode, {
        message: 'Invalid postal code format',
    }),
    address: z.string({ message: REQUIRED_MESSAGE }).min(1, REQUIRED_MESSAGE),
    email: z
        .string({ message: REQUIRED_MESSAGE })
        .email({ message: 'Invalid email address' }),
    phone: z.string({ message: REQUIRED_MESSAGE }).regex(Regex.phoneNumber, {
        message: 'Invalid phone number format',
    }),
    password: z.string({ message: REQUIRED_MESSAGE }).min(8, 'Weak password'),
    showProfile: z.boolean().default(false),
})

export type PersonalInfo = z.infer<typeof personalInfo>
