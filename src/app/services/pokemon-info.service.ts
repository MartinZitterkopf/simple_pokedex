import { Injectable } from '@angular/core';
import { Results } from '../interface/pokemon-data';
import { Pokemon } from '../interface/pokemon-info';

@Injectable({
    providedIn: 'root'
})
export class PokemonInfoService {

    constructor() { }

    async getPokemonByPage(page: number, limit: number = 40): Promise<Results[]> {
        const offset = limit*(page-1)
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
        const resultJson = await result.json();

        if (resultJson.results.length > 0) {
            return resultJson.results;
        }

        return []
    }

    async getPokemonByID(id: string): Promise<Pokemon> {
        let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        return await result.json();
    }

    async getDescripcion(id: string | number): Promise<string> {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        const resultJson = await result.json();
        const texto = resultJson.flavor_text_entries.find((texto:any)=> texto.language.name == "es")
        return texto.flavor_text;
    }
}

