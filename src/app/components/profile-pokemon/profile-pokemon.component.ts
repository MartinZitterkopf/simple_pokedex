import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/interface/pokemon-info';
import { PokemonInfoService } from 'src/app/services/pokemon-info.service';

@Component({
    selector: 'app-profile-pokemon',
    templateUrl: './profile-pokemon.component.html',
    styleUrls: ['./profile-pokemon.component.scss']
})
export class ProfilePokemonComponent implements OnInit, OnChanges {

    @Input() pokemonInfo?: Pokemon;
    @Input() abierto: boolean = false;
    @Output() changeEstado = new EventEmitter();

    descripcion: string = '';

    constructor(
        private pokemonInfoService: PokemonInfoService
    ) { }

    ngOnInit(): void {
    }

    ngOnChanges(): void {
        if (this.pokemonInfo) {
            this.pokemonInfoService.getDescripcion(this.pokemonInfo.id).then(res => {
                this.descripcion = res
            })
        }
    }

}
