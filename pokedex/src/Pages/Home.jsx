import React, { useEffect, useState } from "react";
import Navbar from "../Components/NavBar";
import Skeletons from "../Components/Skeletons";
import PokemonCard from "../Components/PokemonCard";
import { Box, Container, Grid } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Home = ({ setPokemonData }) => {
    const [pokemons, setPokemons] = useState([]);
    var limit = 50;
    const navigate = useNavigate();

    useEffect(() => {
        getpokemons();
    }, []);

    // Realizando a requisição da API (axios)
    const getpokemons = () => {
        try {
            var endpoints = [];
            for (var i = 1; i < limit; i++) {
                endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            }
            // console.log(endpoints);
            // Realizando uma sequencia de requisições para cada endpoint especifico de pokemons
            var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
                .then((res) => setPokemons(res))
        } catch (error) {
            console.error("Erro ao buscar os pokémons: ", error);
        }
    }
    const pokemonFilter = (name) => {
        var filteredPokemons = [];
        if (name === "") {
            getpokemons();
        }
        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                filteredPokemons.push(pokemons[i]);
            }
        }
        setPokemons(filteredPokemons);
    }
    const pokemonPickHandler = (pokemonData) => {
        setPokemonData(pokemonData);
        navigate("/profile");
    }

    return (
        <div>
            <Navbar pokemonFilter={pokemonFilter} />
            <Container maxWidth="false" sx={{ bgcolor: "#d2e0e5", padding: "1em" }}>
                <Grid container spacing={3}>
                    {pokemons.lenght === 0 ? (<Skeletons />
                    ) : (
                        pokemons.map((pokemon, key) => (
                            <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                                <Box onClick={() => pokemonPickHandler(pokemon.data)}>
                                    <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
                                </Box>
                            </Grid>
                        ))
                    )}
                </Grid>
            </Container>
        </div >
    );
}
export default Home;
