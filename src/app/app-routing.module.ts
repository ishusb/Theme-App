import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewPageComponent } from './new-page/new-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes = [
  { path: 'newPage', component: NewPageComponent }, // Define a route for the target component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
