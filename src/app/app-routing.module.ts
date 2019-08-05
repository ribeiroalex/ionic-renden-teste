import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', redirectTo: '  { pathetab', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'imagetab', loadChildren: './imagetab/imagetab.module#ImagetabPageModule' },
  { path: 'maincontent', loadChildren: './maincontent/maincontent.module#MaincontentPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
  

})
export class AppRoutingModule { }
