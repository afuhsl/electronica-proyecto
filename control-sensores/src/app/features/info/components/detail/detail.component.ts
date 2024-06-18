
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Info } from '../../interfaces/interface';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() info: Info;
  @Output() updateInfo = new EventEmitter<void>();
  @Output() deleteInfo = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  update() {
    this.updateInfo.emit();
  }

  delete() {
    this.deleteInfo.emit();
  }
}