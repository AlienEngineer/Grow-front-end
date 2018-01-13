import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pin-input',
  templateUrl: './pin-input.component.html',
  styleUrls: ['./pin-input.component.css']
})
export class PinInputComponent implements OnInit {

  @Output() pinSubmitEvent = new EventEmitter<string>();
  @Output() pinCancelEvent = new EventEmitter<any>();
  pin: string;
  hide: boolean;

  constructor() { }

  ngOnInit() {
    this.pin = "";
    this.hide = true;
  }

  isSubmitDisabled() : boolean {
    return this.pin.length < 4;
  }

  selectNumber(selectedNumber: number) : void {
    this.pin = this.pin + selectedNumber.toString();
  }

  clear() : void {
    this.pin = "";;
  }

  removeLast() : void {
    this.pin = this.pin.slice(0, this.pin.length-1);
  }

  submit() : void {
    this.pinSubmitEvent.emit(this.pin);
  }
  cancel() : void {
    this.pinCancelEvent.emit();
  }
}
