import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Results } from 'src/app/interface/pokemon-data';
import { Pokemon } from 'src/app/interface/pokemon-info';
import { PokemonInfoService } from 'src/app/services/pokemon-info.service';

@Component({
    selector: 'app-list-pokemon',
    templateUrl: './list-pokemon.component.html',
    styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit, OnChanges {

    @Input() data?: Results;
    @Input() seleccionado: Boolean = false;
    @Input() pokemonInfo?: Pokemon;

    @Output() dataInfo = new EventEmitter<string>();

    id: string = "0";

    constructor(
        private pokemonInfoService: PokemonInfoService
        ) {}

    ngOnInit(): void {
    }

    ngOnChanges(): void {
        this.buscarPokemonID();
    }

    private buscarPokemonID(): void {
        if(this.data && this.data.url != "") {
            this.id = this.data?.url.substring(34, this.data.url.length-1);
            return
        }

        if(this.pokemonInfo) {
            this.id = this.pokemonInfo.species.url.substring(42, this.pokemonInfo.species.url.length-1);
            this.data = {
                name: this.pokemonInfo.species.name,
                url: ''
            }
        }
    }

}
