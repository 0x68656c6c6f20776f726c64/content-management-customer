import { NewsCard } from './news_card';
import { caseTitleObject } from './caseViewModel';
import { linkModel } from './linkModel';

export class articleViewModel{
    id:string;
    newsTitle?:NewsCard;
    caseTitle?:caseTitleObject;
    subHeading:string;
    linkBack?:linkModel;
    linkNext?:linkModel;
    body:string;
}