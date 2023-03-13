import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interface/pokemon-info';

@Component({
    selector: 'app-card-pokemon',
    templateUrl: './card-pokemon.component.html',
    styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent implements OnInit {

    @Input() pokemonInfo?: Pokemon;

    constructor(
    ) { }

    ngOnInit(): void {
    }

}
