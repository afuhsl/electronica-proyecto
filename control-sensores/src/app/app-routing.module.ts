import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalComponent } from './features/info/components/global/global.component';
import { InfoModule } from './features/info/info.module';
import { InfoComponent } from './features/info/info.component';

const routes: Routes = [
  {path: 'individual', component: InfoComponent},
  { path: '', redirectTo: 'individual', pathMatch: 'full' },
    {path : "global", component: GlobalComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
