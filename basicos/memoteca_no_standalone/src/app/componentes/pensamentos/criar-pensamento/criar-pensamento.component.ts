import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Pensamento',
    autoria: 'Autor',
    modelo: 'modelo1'
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  criarPensamento() {
    alert("Novo pensamento criado")
  }

  cancelarPensamento() {
    alert("Pensamento cancelado")
  }
}
