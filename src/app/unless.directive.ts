import {Directive,Input,TemplateRef,ViewContainerRef} from '@angular/core';

@Directive({
    selector : '[myUnless]'
})

export class UnlessDirective {
private hasView = false;
constructor(private templateRef : TemplateRef<any>, private viewContainerRef : ViewContainerRef){

}

@Input() set myUnless(condition:boolean)
{
 if(!condition && !this.hasView)
 {
     this.viewContainerRef.createEmbeddedView(this.templateRef);
     this.hasView = true;
 }
 else if(condition && this.hasView)
 {
    this.viewContainerRef.clear;
    this.hasView = false;
 }
}
}