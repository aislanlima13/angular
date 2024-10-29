import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, filter, map, of, switchMap, throwError } from 'rxjs';
import { Item, LivrosResultado } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/LivroVolumeInfo';
import { LivroService } from 'src/app/service/livro.service';

const PAUSA = 300

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  searchField = new FormControl();
  mensagemErro = '';
  livrosResultado: LivrosResultado;

  constructor(private service: LivroService) { }

  livrosEncontrados$ = this.searchField.valueChanges.pipe(
    debounceTime(PAUSA),
    filter((valorDigitado) => valorDigitado.length >= 3),
    switchMap((valorDigitado) => this.service.search(valorDigitado)),
    map(resultado => this.livrosResultado = resultado),
    map(resultado => resultado.items ?? []),
    map((items) => this.resultParseBooks(items)),
    catchError(erro => {
      console.log(erro)
      return throwError(() => new Error(this.mensagemErro = "Ops, algo deu errado!"))
    })
  )

  resultParseBooks(items: Item[]): LivroVolumeInfo[] {
    return items.map(items => {
      return new LivroVolumeInfo(items)
    })
  }
}
