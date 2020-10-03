import { projectList } from './listItem';
import { table } from './table';

export class projectTitleItem{
    value:string;
    description?:string;
    imageUrl?:string;
    left?:boolean;
    projectId:string;
}
export class projectCategoryItem{
    key:string;
    value:string;
    projectItems:projectTitleItem[]
}
export class projectDetailViewModel{
    projectId:string;
    projectTitle:projectTitleItem;
    projectDescription:string;   
    projectFlow:projectList[];
    projectRequirements:projectList[];
    projectFee:table;
    evaluationId?:string;
}