import { FormGroup, Form } from '@angular/forms';

export class formGroup{
    groupId:string;
    formCount:number;
    formGroup?:FormGroup;
    inputs:input[];
    title:string;
    next?:string;
    back?:string;
}
export class input{
    inputId:string;
    lable:string;
    placeholder?:string;
    type:string[];
    option?:string[];
}