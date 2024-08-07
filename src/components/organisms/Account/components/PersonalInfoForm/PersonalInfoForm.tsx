import { Button } from '@components/atoms/buttons'
import { TextArea } from '@components/atoms/inputs'
import { Wrapper } from '@components/atoms/layout'
import { H4, Text, TextLink } from '@components/atoms/typographies'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styled from 'styled-components'
import { PERSONAL_INFO_DEFAULT } from './contants/default-values'
import { CheckIcon } from './icons/CheckIcon'
import { personalInfo, PersonalInfo } from './schemas/personal-info.schema'
import { isValidEmail } from './utils/email-validator.util'

export interface PersonalInfoFormProps {
    onSubmit?: (data: PersonalInfo) => void
    defaultValues?: PersonalInfo
    className?: string
}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = (props) => {
    const { defaultValues = PERSONAL_INFO_DEFAULT, className } = props
    const { control, handleSubmit } = useForm<PersonalInfo>({
        defaultValues,
        resolver: zodResolver(personalInfo),
        mode: 'onSubmit',
    })

    const onSubmit: SubmitHandler<PersonalInfo> = (data) => {
        props.onSubmit?.(data)
    }
    return (
        <Container className={className}>
            <Heading>Personal Information</Heading>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Wrapper rows={1} columns={2} columnGap="24px">
                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextArea
                                {...field}
                                label="First Name"
                                error={fieldState.error?.message}
                            />
                        )}
                    />
                    <Controller
                        name="lastName"
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextArea
                                {...field}
                                label="Last Name"
                                error={fieldState.error?.message}
                            />
                        )}
                    />
                </Wrapper>
                <Wrapper rows={1} columns={2} columnGap="24px">
                    <Controller
                        name="city"
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextArea
                                {...field}
                                label="City"
                                error={fieldState.error?.message}
                            />
                        )}
                    />
                    <Controller
                        name="postalCode"
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextArea
                                {...field}
                                label="Postal Code"
                                error={fieldState.error?.message}
                            />
                        )}
                    />
                </Wrapper>
                <Wrapper rows={1} columns={1}>
                    <Controller
                        name="address"
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextArea
                                {...field}
                                label="Address"
                                error={fieldState.error?.message}
                            />
                        )}
                    />
                </Wrapper>
                <Wrapper rows={1} columns={2} columnGap="24px">
                    <Controller
                        name="email"
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextArea
                                {...field}
                                label="Email"
                                error={fieldState.error?.message}
                                postfixElement={
                                    isValidEmail(field.value) && CheckIcon
                                }
                            />
                        )}
                    />
                    <Controller
                        name="phone"
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextArea
                                {...field}
                                label="Phone"
                                error={fieldState.error?.message}
                            />
                        )}
                    />
                </Wrapper>
                <Wrapper rows={1} columns={2} columnGap="24px">
                    <Controller
                        name="password"
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextArea
                                {...field}
                                label="Password"
                                type="password"
                                error={fieldState.error?.message}
                            />
                        )}
                    />
                </Wrapper>
                <Text $weight="medium">
                    Use this email to log in to your{' '}
                    <TextLink
                        href="https://resumedone.co/"
                        target="_blank"
                        $weight="medium"
                    >
                        resumedone.io
                    </TextLink>{' '}
                    account and receive notifications.
                </Text>
                <Button type="submit">Save</Button>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
`
const Heading = styled(H4)`
    height: 30px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
`
