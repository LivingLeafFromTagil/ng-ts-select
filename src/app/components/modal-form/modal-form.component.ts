import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import options from 'src/app/data/options';
import { selectOption } from 'src/app/models/selectOption';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  constructor(private modalService: ModalService) {}

  form = new FormGroup({
    newTitle: new FormControl<string>('', [Validators.required]),
    newTextColor: new FormControl<string>('#000000'),
    newBackgroundColor: new FormControl<string>('#000000'),
  });

  get title() {
    return this.form.controls.newTitle as FormControl;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(options);
    const newItem: selectOption = {
      id: options.length,
      optionTitle: this.form.value.newTitle!,
      color: {
        text: this.form.value.newTextColor!,
        background: this.form.value.newBackgroundColor!
      }
    }
    if (this.form.value.newTitle?.length != 0) {
      options.push(newItem);
      this.modalService.close();
    }
    console.log(options)
    console.log(this.title);
    console.log(this.form.value);
  }

}
