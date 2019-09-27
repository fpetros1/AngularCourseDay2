import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const sharedModules = [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
];

@NgModule({
    imports: sharedModules,
    exports: sharedModules
})
export class SharedModule {

}