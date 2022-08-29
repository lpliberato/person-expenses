import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  displayedColumns: string[] = ['actions', 'name'];
  categories: Category[] = [];

  constructor(private categoryService: CategoryService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.categoryService
        .getCategories()
        .subscribe(categories => this.categories = categories);
  }

  add(): void {
    this.router.navigateByUrl(`/category`);
  }
  
  delete(id: string): void {
    this.dialog.open(ConfirmationDialogComponent, {
      width: '250px', 
      enterAnimationDuration: '0ms',
      exitAnimationDuration: '0ms',
    })
    .afterClosed()
    .subscribe(response => {
      if (response == 'yes') {
        this.categoryService
            .deleteCategory(id)
            .subscribe(() => window.location.reload());
      }
    });
  }

  edit(id: number): void {
    this.router.navigateByUrl(`/category/${id}`)
  }
}
