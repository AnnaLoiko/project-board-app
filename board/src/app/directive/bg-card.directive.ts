import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { ICard } from 'src/app/models/card';

@Directive({
  selector: '[appBgCard]'
})
export class BgCardDirective implements OnInit {

  @Input() item: ICard;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  ngOnInit() {
    const dateDiff = +(new Date(this.item.dueDate)) - Date.now();

    if (this.item.isDone === false && dateDiff < 604800000) {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', '#fdfbcd');
    }

    if (this.item.isDone === false && dateDiff < 259200000) {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', '#ebc2c9');
    }
  }

}
