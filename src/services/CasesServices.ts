import { Injectable } from '@angular/core';
import { caseTitleObject } from 'src/models/caseViewModel';

@Injectable({
  providedIn: 'root'
})
export class CasesService {

  data:caseTitleObject[]=[
    {
      caseTitle:"案例一",
      caseId:"case1",
      imageUrl:"./../../../assets/images/img_1.jpg"
    },
    {
      caseTitle:"案例二",
      caseId:"case2",
      imageUrl:"./../../../assets/images/img_2.jpg"
    },
    {
      caseTitle:"案例三",
      caseId:"case3",
      imageUrl:"./../../../assets/images/img_3.jpg"
    },
    {
      caseTitle:"案例四",
      caseId:"case4",
      imageUrl:"./../../../assets/images/img_4.jpg"
    }
  ];

  constructor() { }

  getAllCases()
  {
    return this.data;
  }

  public getCaseWithId(key:string)
  {
    return this.data.find(({caseId})=>caseId==key);
  }

  public getCaseHeadWithId(key:string)
  {
    return this.data.find(({caseId})=>caseId==key).caseTitle;
  }
}
