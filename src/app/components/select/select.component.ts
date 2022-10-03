import { Component, Input } from "@angular/core";
import options from "src/app/data/options";
import { selectOption } from "src/app/models/selectOption";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
})
export class SelectComponent {

  options: selectOption[] = options;
  @Input() public selectedBackgroundColor = '';
  @Input() selectedTextColor = '';
  @Input() selectedValue = '';

  changeColor(): void {
    const opt = options.filter(val => val.optionTitle === this.selectedValue)[0];
    this.selectedTextColor = opt.color.text;
    this.selectedBackgroundColor = opt.color.background;
    console.log('этот', this.selectedTextColor);
    console.log("tot", this.selectedBackgroundColor);
  }
}
