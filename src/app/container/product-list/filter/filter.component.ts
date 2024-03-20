import { Component , EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all : number =0;
  @Input()
  inStock : number = 0;
  @Input()
  OutOfStock : number = 0;

  @Output()
  SelectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  onSelectedButtonChange(){
    this.SelectedFilterRadioButtonChanged.emit(this.selectedFilter);
  }

  selectedFilter: string = "all";
}
