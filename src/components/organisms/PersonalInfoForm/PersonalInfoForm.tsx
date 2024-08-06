import { Button } from '@components/atoms/buttons'
import { TextArea } from '@components/atoms/inputs'
import { Wrapper } from '@components/atoms/layout'
import { Body, H4 } from '@components/atoms/typographies'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styled from 'styled-components'
import { PERSONAL_INFO_DEFAULT } from './default-values'
import { personalInfo, PersonalInfo } from './personal-info.schema'

export interface PersonalInfoFormProps {}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = (props) => {
    const { control, handleSubmit } = useForm<PersonalInfo>({
        defaultValues: PERSONAL_INFO_DEFAULT,
        resolver: zodResolver(personalInfo),
        mode: 'onSubmit',
    })

    const onSubmit: SubmitHandler<PersonalInfo> = (data) => {
        console.log(data)
    }
    return (
        <Container>
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
                <Body>
                    Use this email to log in to your resumedone.io account and
                    receive notifications.
                </Body>
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
