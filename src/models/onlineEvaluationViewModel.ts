import { formGroup } from './formGroup';
import { projectTitleItem } from './projectViewModel';

export class onlineEvaluationTab{
    evaluationTabId:string;
    projectTitle:projectTitleItem;
    formGroups:formGroup[];
}
export class onlineEvaluationViewModel{
    tabs:onlineEvaluationTab[];
    defaultShow:number;
}