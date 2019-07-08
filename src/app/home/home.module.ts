import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      { 
        path: '', 
        component: HomePage,
        children: [
          {
            path:'imagetab',
            loadChildren: '../imagetab/imagetab.module#ImagetabPageModule'
          },
          {
            path:'maincontent',
            loadChildren: '../maincontent/maincontent.module#MaincontentPageModule'
          }
        ] 
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
