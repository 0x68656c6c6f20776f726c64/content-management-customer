import { Injectable } from '@angular/core';
import { input, formGroup } from 'src/models/formGroup';
import { onlineEvaluationTab } from 'src/models/onlineEvaluationViewModel';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormServices {

  inputs:input[] = [
    {
      inputId:"input1",
      lable:"姓名",
      placeholder:"张三",
      type:["required"]
    },
    {
      inputId:"input2",
      lable:"生日",
      placeholder:"mm/dd/yyyy",
      type:["required", "date"]
    },
    {
      inputId:"input3",
      lable:"电话",
      placeholder:"100-1000-1000",
      type:["tel","required"]
    },
    {
      inputId:"input4",
      lable:"邮箱",
      placeholder:"info@polarPioneer.com",
      type:["email","required"]
    },
    {
      inputId:"input5",
      lable:"城市",
      placeholder:"北京市",
      type:["required"]
    },
    {
      inputId:"input6",
      lable:"地址",
      placeholder:"长江路4号12栋2103",
      type:["required"]
    },
    {
      inputId:"select1",
      lable:"语言",
      type:["select","required"],
      option:["雅思","托福","CELPIP"]
    },
    {
      inputId:"input7",
      lable:"分数",
      type:["required","number"]
    },
    {
      inputId:"input8",
      lable:"考试日期",
      placeholder:"mm/dd/yyyy",
      type:["required","date"]
    }   
  ]

  formGroups:formGroup[] = [
    {
      groupId:"group1",
      formCount:4,
      title:"个人信息",
      inputs:[this.inputs[0],this.inputs[1],this.inputs[2],this.inputs[3]],
    },
    {
      groupId:"group2",
      formCount:2,
      title:"地址信息",
      inputs:[this.inputs[4],this.inputs[5]]
    },
    {
      groupId:"group3",
      formCount:3,
      title:"语言信息",
      inputs:[this.inputs[6],this.inputs[7],this.inputs[8]]
    }
  ]

  evaluationTabs:onlineEvaluationTab[]=[
    {
      evaluationTabId:"1",
      projectTitle: {
        value:"家庭团聚",
        description:"家庭团聚移民：夫妻担保移民移民的处理速度稳定在1年左右，父母团聚移民2019年改为抢名额制，将在2019年１月下旬重开，名额从2015年的5000个涨到2019年的2万个，处理时间大约在1年左右。",
        imageUrl:"./../../../assets/images/slider-1.jpg",
        projectId:"1"
      },
      formGroups:[this.formGroups[0],this.formGroups[1]]
    },
    {
      evaluationTabId:"2",
      projectTitle:{
        value:"留学移民",
        description:"省提名移民留学生移民：大部分省总体的态度是非常积极的，在2017-2018年大部分省提名都做了调整，预计2019年大调整的几率不高。目前比较好的一些省提名移民项目分别有：安省提名，BC省提名，曼省提名，萨省提名，NS省提名等。",
        imageUrl:"./../../../assets/images/slider-2.jpg",
        projectId:"2"
      },
      formGroups:[this.formGroups[0],this.formGroups[2]]
    },
    {
      evaluationTabId:"3",
      projectTitle:    {
        value:"省提名",
        description:"Express Entry 联邦EE技术移民项目：预计分数不会有太大的降幅，随着留学生的不断增加，进入EE池子的人多过被挑选的人，建议英语较差、或者只想读个大专的申请人，可以转向各个省的提名项目（PNP）。",
        imageUrl:"./../../../assets/images/slider-1.jpg",
        projectId:"3"
      },
      formGroups:[this.formGroups[0],this.formGroups[1],this.formGroups[2]]
    }
  ]

  constructor(private _formBuilder: FormBuilder) { }

  getOnlineEvaluationForm()
  {
    this.evaluationTabs.forEach(tab=>{
      tab.formGroups.forEach(fg=>{
        fg.formGroup = this._formBuilder.group(
          this.buildFormWithInfo(fg)
        )
      })
    });
    this.evaluationTabs.forEach(tab=>{
      for(let index=0;index<tab.formGroups.length;index++)
      {
        if(index>0)
        {
          tab.formGroups[index].back="上一步";
        }
        if(index<tab.formGroups.length-1)
        {
          tab.formGroups[index].next="下一步";
        }
      }
    })
    return this.evaluationTabs;
  }

  private buildFormWithInfo(forms:formGroup)
  {
    var result={};
    forms.inputs.forEach(element=>{
      result[element.inputId]=new FormControl('',Validators.required);
    })
    return result;
  }
}
