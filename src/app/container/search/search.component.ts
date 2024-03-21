import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string ="";
  @Output()
  onSearchTextChange: EventEmitter<string> = new EventEmitter<string>();

  SearchTextChange(){
    this.onSearchTextChange.emit(this.searchText);
  }
  updateSearchText(inputIN : HTMLInputElement){
/*     this.searchText = event.target.value;
 */    
    this.searchText = inputIN.value;
    this.onSearchTextChange.emit(this.searchText);
  }
}
