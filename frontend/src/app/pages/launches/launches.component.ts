import { Component, Inject, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Launch } from 'src/app/models/launch.model';
import { LaunchService } from 'src/app/services/launch.service';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],  
})
export class LaunchesComponent implements OnInit {

  displayedColumns: string[] = ['actions', 'description', 'date', 'value'];
  launches: Launch[] = [];

  constructor(private launchService: LaunchService,
              private router: Router,
              public dialog: MatDialog,
              private dateAdapter: DateAdapter<any>,
              @Inject(MAT_DATE_LOCALE) private _locale: string) { }

  ngOnInit(): void {
    this._locale = 'pt-br';
    this.dateAdapter.setLocale(this._locale);
    this.launchService
        .getLaunches()
        .subscribe(launches => this.launches = launches);
  }

  add(): void {
    this.router.navigateByUrl(`/launch`);
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
        this.launchService
            .deleteLaunch(id)
            .subscribe(() => window.location.reload());
      }
    });
  }

  edit(id: number): void {
    this.router.navigateByUrl(`/launch/${id}`)
  }
}
