import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchingPage } from './searching';

@NgModule({
    declarations: [
        SearchingPage,
    ],
    imports: [
        IonicPageModule.forChild(SearchingPage),
    ],
    exports: [
        SearchingPage
    ]
})
export class SearchingPageModule {}