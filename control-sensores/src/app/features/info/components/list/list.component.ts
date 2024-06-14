import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from '../../interfaces/interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  @Input() info$: Observable<Info[]>;
  @Output() infoEmitter = new EventEmitter<Info>();

  constructor() {}

  ngOnInit(): void {}

  selectInfo(info: Info) {
    this.infoEmitter.emit(info);
  }
}
