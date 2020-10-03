import { projectCategoryItem } from './projectViewModel';

export class bannerItem{
    imageUrl:string
}

export class logoItem{
    logoNormal:string;
    logoHover:string;
}
export class headerViewModel{
    logoImage:logoItem;
    projectInfo:projectCategoryItem[];
    bannerObjects:bannerItem[]
}