import React from 'react'
import NavBar from '../Components/NavBar'
import { Container } from '@mui/material'

export const Profile = ({ pokemonData }) => {
    return (
        <>
            <Container maxWidth="md">
                <NavBar hideSearch />
                *Profile*
            </Container>
        </>
    )
}
