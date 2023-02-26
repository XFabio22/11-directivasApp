import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit{

  htmlElement: ElementRef<HTMLElement>;
  @Input() color:string ='red';
  @Input() mensaje:string = ''
  constructor( private el:ElementRef<HTMLElement>) { 
    console.log('constructor directive');
    console.log(el);
    this.htmlElement =el
  }

  ngOnInit(): void {
    console.log('NgOnInit directive');
    this.setColor();
    this.setMensaje();
    
  }
  setColor():void{
    this.htmlElement.nativeElement.style.color= this.color;
    this.htmlElement.nativeElement.classList.add('form-text')

  }

  setMensaje():void{
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

}

