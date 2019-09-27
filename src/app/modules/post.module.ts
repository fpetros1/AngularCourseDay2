import { NgModule } from '@angular/core';
import { Aba1Component } from '../components/aba1-component/aba1.component';
import { DetalharPostComponent } from '../components/detalhar-post/detalhar-post.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared.module';

const routes: Routes = [
    { path: '', component: Aba1Component, pathMatch: 'full' },
    { path: ':id', component: DetalharPostComponent, pathMatch: 'full' }
]

@NgModule({
    declarations: [
        Aba1Component,
        DetalharPostComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class PostModule {}