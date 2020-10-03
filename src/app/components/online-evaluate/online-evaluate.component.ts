import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { onlineEvaluationViewModel } from 'src/models/onlineEvaluationViewModel';
import { FormServices } from 'src/services/FormServices';
import { formGroup } from 'src/models/formGroup';

@Component({
  selector: 'app-online-evaluate',
  templateUrl: './online-evaluate.component.html',
  styleUrls: ['./online-evaluate.component.css']
})
export class OnlineEvaluateComponent implements OnInit {

  model:onlineEvaluationViewModel = new onlineEvaluationViewModel();
  isLinear:boolean = false;

  constructor(private route:ActivatedRoute,private forms:FormServices) { }

  ngOnInit(): void {
    this.model.tabs = this.forms.getOnlineEvaluationForm();
    let formId = this.route.snapshot.queryParamMap.get('id');
    
    if(formId)
    {
      this.model.defaultShow = Number.parseInt(formId)-1;
    }
    else
    {
      this.model.defaultShow = 0;
    }
  }

  findInputWithId(formGroup:formGroup,inputKey:string)
  {
    return formGroup.formGroup.get(inputKey);
  }

}
