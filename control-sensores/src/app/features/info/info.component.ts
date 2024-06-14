import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, filter, tap } from 'rxjs';
import { Info } from './interfaces/interface';
import { IeFirestoreService } from '../../core/ie-firestore.service';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit{
  allInfo$: Observable<Info[]>
  selectedInfo: Info;

  constructor(
    private readonly IEFS: IeFirestoreService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.allInfo$ = this.IEFS.getAll();
  }

  /*addInfo() {
    const dialogRef = this.dialog.open(FormComponent, {
      data: {},
      width: '40%',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((info) => this.IEFS.create(info))
      )
      .subscribe();
  }

  updateInfo() {
    const dialogRef = this.dialog.open(FormComponent, {
      data: { ...this.selectedInfo },
      width: '40%',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((info) => this.IEFS.update(info)),
        tap((info) => this.selectInfo(info))
      )
      .subscribe();
  }*/

  selectInfo(info: Info) {
    this.selectedInfo = info;
  }
}
