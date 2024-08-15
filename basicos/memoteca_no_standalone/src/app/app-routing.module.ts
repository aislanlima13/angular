import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';
import { CustomReuseStrategy } from './custom-reuse-estrategy';

const routes: Routes = [
  {
    path: '', redirectTo: 'listarPensamento', pathMatch: 'full'
  },
  {
    path: 'criarPensamento', component: CriarPensamentoComponent
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentosComponent,
    data: {
      reuseComponent: true
    }
  },
  {
    path: 'pensamentos/excluirPensamento/:id', component: ExcluirPensamentoComponent
  },
  {
    path: 'pensamentos/editarPensamento/:id', component: EditarPensamentoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule, FormsModule],
  providers: [
    {provide: RouteReuseStrategy, useClass: CustomReuseStrategy}
  ]
})
export class AppRoutingModule { }
