import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImagetabPage } from './imagetab.page';
var ImagetabPageModule = /** @class */ (function () {
    function ImagetabPageModule() {
    }
    ImagetabPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild([
                    {
                        path: '',
                        component: ImagetabPage
                    }
                ])
            ],
            declarations: [ImagetabPage]
        })
    ], ImagetabPageModule);
    return ImagetabPageModule;
}());
export { ImagetabPageModule };
//# sourceMappingURL=imagetab.module.js.map