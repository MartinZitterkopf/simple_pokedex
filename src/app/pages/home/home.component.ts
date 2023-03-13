import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Results } from 'src/app/interface/pokemon-data';
import { Pokemon } from 'src/app/interface/pokemon-info';
import { PokemonInfoService } from 'src/app/services/pokemon-info.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    @ViewChild('list') listElement!: ElementRef;

    public listPokemon: Results[] = []
    private paginaPreview: number = 1;
    private cargando: boolean = false;
    public pokemonInfo?: Pokemon;
    mostrarInfo: boolean = false;

    constructor(
        private pokemonInfoService: PokemonInfoService
    ) { }

    ngOnInit(): void {
        this.cargarLista();
    }

    async cargarLista() {
        this.cargando = true;
        this.listPokemon = [...this.listPokemon ,...await this.pokemonInfoService.getPokemonByPage(this.paginaPreview)];
        this.paginaPreview++;
        this.cargando = false;
    }

    public onScroll(e: any): void {
		if(this.cargando == true) {
            return
        }

        if(Math.round(
            this.listElement.nativeElement.clientHeight + this.listElement.nativeElement.scrollTop) >= (e.srcElement.scrollHeight - 600)) {
            this.cargarLista();
        }
    }

    public async infoPokemon(id: string){
        this.pokemonInfo = await this.pokemonInfoService.getPokemonByID(id)
    }

    changeEstado() {
        if(this.pokemonInfo) {
            this.mostrarInfo = !this.mostrarInfo;
        }
    }

}

