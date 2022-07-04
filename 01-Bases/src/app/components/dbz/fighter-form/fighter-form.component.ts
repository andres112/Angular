import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FighterInterface } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-fighter-form',
  templateUrl: './fighter-form.component.html',
})
export class FighterFormComponent implements OnInit {
  @Input() newFighter: FighterInterface = { name: '', power: 0 };
  // @Output() onSubmit:EventEmitter<FighterInterface> = new EventEmitter();
  constructor( private dbzService:DbzService) {}// dependency injection
  ngOnInit(): void {}

  addFighter = () => {
    // this.onSubmit.emit(this.newFighter); // With emitter
    this.dbzService.addFighter(this.newFighter); // With service
    this.newFighter = { name: '', power: 0 };
  };
}
