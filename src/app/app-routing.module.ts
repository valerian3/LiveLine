import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from "./Shared/components/page-not-found/page-not-found.component";
import {MainComponent} from "./main/main/main.component";
import {CreateComponent} from "./create/create/create.component";
import {EditComponent} from "./edit/edit/edit.component";
import {MainLayoutComponent} from "./Shared/layouts/main-layout/main-layout.component";

const routes: Routes = [

  {path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: MainComponent},
      {path: 'create', component: CreateComponent},
      {path: 'edit', component: EditComponent},
      {path: '404', component: PageNotFoundComponent},
      {path: '**', redirectTo: '/404'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
