import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FighterInterface } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-fighter-form',
  templateUrl: './fighter-form.component.html',
})
export class FighterFormComponent implements OnInit {
  @Input() newFighter: FighterInterface = { name: '', power: 0 };
  @Output() onSubmit:EventEmitter<FighterInterface> = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}

  addFighter = () => {
    this.onSubmit.emit(this.newFighter);
    this.newFighter = { name: '', power: 0 };
  };
}
