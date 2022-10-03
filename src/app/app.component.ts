import { Component } from '@angular/core';
import { ModalService } from './service/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public modalService: ModalService) {}

  title = 'Тестовое задание №1: select';
}
