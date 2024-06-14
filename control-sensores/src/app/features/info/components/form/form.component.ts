import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Info } from '../../interfaces/interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder,
    public readonly dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly info: Info
  ) {}

  ngOnInit(){
    this.setForm();
  }

  setForm(){
    this.form = this.formBuilder.group({
      temperatura: [this.info.temperatura, [Validators.required]],
      humedad: [this.info.humedad, [Validators.required]],
      luz: [this.info.luz, [Validators.required]],
      distancia: [this.info.distancia, [Validators.required]],
      ventiladores: [this.info.ventiladores, [Validators.required]]
    })
  }

  submit(){
    this.dialogRef.close({ ...this.info, ...this.form.value});
  }
}
