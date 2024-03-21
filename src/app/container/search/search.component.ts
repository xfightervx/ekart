import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

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
    @ViewChild('searchInput') inputIN : ElementRef;
    updateSearchText(){
  /*     this.searchText = event.target.value;
   */    
      this.searchText = this.inputIN.nativeElement.value;
      this.onSearchTextChange.emit(this.searchText);
    }
}
