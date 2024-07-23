import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento = {
    conteudo: 'Teste 01',
    autoria: 'Aislan',
    modelo: 'modelo3'
  }

  constructor() {

  }

  ngOnInit(): void {

  }

  larguraPensamento(): String {
    if (this.pensamento.conteudo.length > 256) {
      return 'pensamento-g'
    } else {
      return 'pensamento-p'
    }
  }
}
