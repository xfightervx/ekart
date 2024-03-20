import { Component } from '@angular/core';


@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  ListOfString: string[] = ['John', 'Jane', 'Mike', 'Emily'];
  searchText : string = '';
  setSearch(value : string){
    this.searchText = value;
  }
}