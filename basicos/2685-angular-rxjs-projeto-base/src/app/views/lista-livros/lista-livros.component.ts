import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {

  listaLivros: [];

  searchField: string = ''
  subscription: Subscription

  constructor(private service: LivroService) { }

  search() {
    this.subscription = this.service.search(this.searchField).subscribe({
      next: returnAPI => console.log(returnAPI),
      error: erro => console.error(erro),
      complete: () => console.log('Observable completado')
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
