import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  @Input() public items: string[] = [];
  @Output() public onMove: EventEmitter<number> = new EventEmitter<number>();

  public moveItem(index: number): void{
    this.onMove.emit(index);
  };

  @Input() public doneItems: string[] = [];
  @Output() public onRestore: EventEmitter<number> = new EventEmitter<number>();

  public restoreItem(index: number): void{
    this.onRestore.emit(index);
  };

  @Output() public onDelete: EventEmitter<number> = new EventEmitter<number>();

  public deleteItem(index: number): void{
    this.onDelete.emit(index);
  };

}
