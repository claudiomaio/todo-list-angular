import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title  = 'My todo list';
  public todoItems: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  public newItemToAdd: string = '';
  public removeItem(i:number) {
    this.doneItems.push(this.todoItems[i]);
    this.todoItems.splice(i, 1);
  }
  public addItem() {
    this.todoItems.push(this.newItemToAdd);
    this.newItemToAdd = '';
  }
  public title2 = 'Already Done';
  public doneItems: string[] = [];
  
  public restoreItem(i:number) {
    this.todoItems.push(this.doneItems[i]);
    this.doneItems.splice(i, 1);
  }
  public deleteItem(i:number) {
    this.doneItems.splice(i, 1);
  }
}
