import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {

  @Output() add = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();

  _add(): void {
    this.add.emit();
  }

  _delete(): void {
    this.delete.emit();
  }

  _edit(): void {
    this.edit.emit();
  }
}
