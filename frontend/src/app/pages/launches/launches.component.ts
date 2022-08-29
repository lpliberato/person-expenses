import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Launch } from 'src/app/models/launch.model';
import { LaunchService } from 'src/app/services/launch.service';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
})
export class LaunchesComponent implements OnInit {

  displayedColumns: string[] = ['actions', 'description', 'date', 'value'];
  launches: Launch[] = [];

  constructor(private launchService: LaunchService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
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
