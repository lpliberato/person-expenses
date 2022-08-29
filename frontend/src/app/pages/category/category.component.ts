import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryForm!: FormGroup;
  private id: string = '';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildCategoryFormGroup();
    this.route.params.subscribe(parameter => {
      this.id = parameter['id'];

      if (this.id) {
        this.categoryService
            .getCategory(this.id)
            .subscribe(category => {
              this.categoryForm.setValue({ 
                id: category?.id,
                name: category?.name
              });
            });
      }
    });
  }

  buildCategoryFormGroup(): void {
    this.categoryForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required]
    });
  }

  confirm(): void {
    if (!this.id) {
    this.categoryService
        .createCategory(this.categoryForm.getRawValue())
        .subscribe(() => this.router.navigateByUrl('/categories'));
    } else {
      this.router.navigateByUrl('/categories');
    }
  }

  cancel(): void {
    this.router.navigateByUrl('/categories');
  }  
}
