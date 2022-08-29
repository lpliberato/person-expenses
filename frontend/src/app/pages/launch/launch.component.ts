import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';

import { CategoryService } from '../../services/category.service';
import { LaunchService } from '../../services/launch.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {

  categories: Category[] = [];
  launchForm!: FormGroup;
  private id: string = '';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private launchService: LaunchService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildLaunchFormGroup();
    this.getCategories();

    this.route.params.subscribe(parameter => {
      this.id = parameter['id'];

      if (this.id) {
        this.launchService
            .getLaunch(this.id)
            .subscribe(launch => {
              this.launchForm.setValue({ 
                id: launch?.id,
                idCategoria: launch.idCategoria,
                description: launch.description,
                date: launch.date,
                value: launch.value
              });
            });
      }
    });
  }

  getCategories(): void {
    this.categoryService
        .getCategories()
        .subscribe(categories => this.categories = categories);
  }

  buildLaunchFormGroup(): void {
    this.launchForm = this.formBuilder.group({
      id: [''],
      idCategoria: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      value: ['', Validators.required]      
    });
  }

  confirm(): void {
    if (!this.id) {
      this.launchService
          .createLaunch(this.launchForm.getRawValue())
          .subscribe(() => this.router.navigateByUrl('/launches'));
    } else {
      this.router.navigateByUrl('/launches');
    }
  }

  cancel(): void {
    this.router.navigateByUrl('/launches');
  }  

}
