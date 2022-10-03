import { Component, Input, OnInit } from "@angular/core";
import options from "src/app/data/options";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit{
  constructor() {}

  @Input() backgroundColor = '';
  @Input() textColor = '';
  inputValue = '';
  
  ngOnInit(): void {

  };

  inputChange(): void {
    console.log(this.inputValue);
    const opt = options.filter(val => `${val.optionTitle}`.toLowerCase() === this.inputValue.toLowerCase())[0];
    console.log(opt);
    this.inputValue = `${opt.id + 1}. ${this.inputValue[0].toUpperCase()}${this.inputValue.slice(1)}`;
    this.backgroundColor = opt.color.background;
    this.textColor = opt.color.text;
    console.log(opt);
    console.log(this.inputValue);
  };

  ngModelInputChange(): void {
    const opt = options.filter(val => `${val.optionTitle}`.toLowerCase() === this.inputValue.toLowerCase());
    if (opt.length === 0 && this.inputValue.match(/[0-9]/)) {
      this.inputValue = this.inputValue.slice(3);
      this.textColor = '#000000';
      this.backgroundColor = '#FFFFFF';
    }
  }
}