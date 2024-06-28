import React, { useEffect, useState } from "react";
import Navbar from "../Components/NavBar";
import PokemonCard from "../Components/PokemonCard";
import { Container, Grid } from "@mui/material";
import axios from "axios";

export const Home = () => {

    const [pokemons, setPokemons] = useState([]);
    var limit = 50;

    useEffect(() => {
        getpokemons();
    }, []);

    // Realizando a requisição da API (axios)
    const getpokemons = async () => {
        try {
            var endpoints = [];
            for (var i = 1; i < limit; i++) {
                endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            }
            // console.log(endpoints);
            // Realizando uma sequencia de requisições para cada endpoint especifico de pokemons
            var response = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
                .then((res) => { setPokemons(res); console.log(res) })
        } catch (error) {
            console.error("Erro ao buscar os pokémons: ", error);
        }
    }

    
    // axios
    //     .get("https://pokeapi.co/api/v2/pokemon?limit=50")
    //     .then((res) => {
    //         setPokemons(res.data.results)
    //         console.log(res)
    //     })
    //     .catch((err) => console.log(err));


    return (
        <div>
            <Navbar />
            <Container maxWidth="false">
                <Grid container spacing={3}>
                    {pokemons.map((pokemon, key) => (
                        <Grid item xs={2} key={key}>
                            <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div >
    );
}
export default Home;
