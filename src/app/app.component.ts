import { Component } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import {MatDialog} from '@angular/material/dialog';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private bnIdle: BnNgIdleService, public dialog: MatDialog) {

  }
  title = 'demo';
  ngOnInit(): void {
    // this.openDialog();
    this.bnIdle.startWatching(60).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        console.log('session expired');
        this.openDialog();
      }
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ExampleDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
