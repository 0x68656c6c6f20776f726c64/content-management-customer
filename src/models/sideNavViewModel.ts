import { projectTitleItem, projectCategoryItem } from './projectViewModel';
import { NewsCard } from './news_card';
import { caseTitleObject } from './caseViewModel';

export class sideNavViewModel{
    projects:projectTitleItem[]
    news:NewsCard[];
    cases:caseTitleObject[];
}