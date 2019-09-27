import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './components/root.component';
import { SharedModule } from './modules/shared.module';

const routes: Routes = [
  { path: '', component: RootComponent, pathMatch: 'full' },
  { path: 'posts',
    loadChildren: () => import('./modules/post.module').then(
      x => x.PostModule
    ) 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
