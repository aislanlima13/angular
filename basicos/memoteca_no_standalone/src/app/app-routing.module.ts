import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'listarPensamento', pathMatch: 'full'
  },
  {
    path: 'criarPensamento', component: CriarPensamentoComponent
  },
  {
    path: 'listarPensamento', component: ListarPensamentosComponent
  },
  {
    path: 'pensamentos/excluirPensamento/:id', component: ExcluirPensamentoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
