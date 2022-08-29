import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { LaunchComponent } from './pages/launch/launch.component';
import { LaunchesComponent } from './pages/launches/launches.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'launches',
        component: LaunchesComponent
      },
      {
        path: 'launch/:id',
        component: LaunchComponent
      },
      {
        path: 'launch',
        component: LaunchComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
      },
      {
        path: 'category/:id',
        component: CategoryComponent
      },
      {
        path: 'category',
        component: CategoryComponent
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
