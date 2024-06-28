import React, { useEffect, useState } from "react";
import Navbar from "../Components/NavBar";
import PokemonCard from "../Components/PokemonCard";
import { Container, Grid } from "@mui/material";
import axios from "axios";

export const Home = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getpokemons();
    }, []);

    // Realizando a requisição da API (axios)
    const getpokemons = () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=50")
            .then((res) => {
                setPokemons(res.data.results)
                console.log(res)
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <Navbar />
            <Container maxWidth="false">
                <Grid container>
                    {pokemons.map((pokemon, key) => (
                        <Grid item xs={3} key={key}>
                            <PokemonCard />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div >
    );
}
export default Home;
