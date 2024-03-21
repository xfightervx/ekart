import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';


@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  ListOfString: string[] = ['John', 'Jane', 'Mike', 'Emily'];
  searchText : string = '';

  @ViewChild('productlistref') productListComponant : ProductListComponent;
  setSearch(value : string){
    this.searchText = value;
  }
}