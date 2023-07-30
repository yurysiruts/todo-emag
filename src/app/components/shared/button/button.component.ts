import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() full = false;
  @Input() background: 'green' | 'blue' | 'red' = 'green';
  @Input() color: 'black' | 'white' | 'gray' = 'black';

  @Input() minWidth!: number;

  @HostBinding('class.block') get isEnabled(): boolean {
    return this.full;
  }
}
