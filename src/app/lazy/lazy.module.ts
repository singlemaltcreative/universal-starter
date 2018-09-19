import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-lazy-view',
  template: `<h3>i'm lazy</h3>`
})
export class LazyComponent {}

@Component({
    selector: 'app-lazy-view',
    template: `<h3>i'm lazy and nested</h3>`
  })
  export class LazyNestedComponent {}

@NgModule({
  declarations: [
    LazyComponent,
    LazyNestedComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyComponent, pathMatch: 'full'},
      { path: 'nested', component: LazyNestedComponent}
    ])
  ]
})
export class LazyModule {

}
