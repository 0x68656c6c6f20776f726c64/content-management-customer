import { Injectable } from '@angular/core';
import { bannerItem, logoItem } from 'src/models/headerViewModel';
import { footerViewModel } from 'src/models/footerViewModel';
import { projectTitleItem } from 'src/models/projectViewModel';
import { ProjectServices } from './ProjectServices';
import { sideNavViewModel } from 'src/models/sideNavViewModel';
import { element } from 'protractor';
import { bussinessCardModel } from 'src/models/bussinessCardModel';
import { aboutUsViewModel } from 'src/models/aboutUsViewModel';

@Injectable({
  providedIn: 'root'
})
export class InfoServices {

  bannerItem:bannerItem[] = [
    {
      imageUrl:'./../../../assets/images/banner/1.jpg'
    },
    {
      imageUrl:'./../../../assets/images/banner/2.jpg'
    },
    {
      imageUrl:'./../../../assets/images/banner/3.jpg'
    },
    {
      imageUrl:'./../../../assets/images/banner/4.jpg'
    }
  ];

  logo:logoItem = {
    logoNormal:"./../../../assets/images/logo/normal.jpg",
    logoHover:"./../../../assets/images/logo/hover.jpg"
  };

  companyDescription:string = "一直致力于为全球的精英阶层提供“通行无阻 定居无忧”的解决方案。从子女海外教育、生意全球化发展、投资置业、海外身份规划等方面，不断在海外定居领域和全球化业务布局方面投入精力，不断为想要实现全球梦的人士提供多元化的产品选择；600多名专业文案、100多位精英移民律师、50多人的项目开发团队、10多名前移民官顾问，并与各国政府移民局官员保持良好关系，设身处地站在客户利益角度出发，全球团队一致的专业化服务水平，为您的移民之路保驾护航，成为您心中满意的全球第一品牌。"

  companyAddress:string = "34 Street Name, City Name Here, United States";

  companyPhone:string = "+1 242 4942 290";

  companyEmail:string = "info@polarpioneers.com";

  homeDisplayProjectKey = "hot";

  newsPageLimit:number = 3;


  aboutUsDescription:string ="一直致力于为全球的精英阶层提供“通行无阻 定居无忧”的解决方案。从子女海外教育、生意全球化发展、投资置业、海外身份规划等方面，不断在海外定居领域和全球化业务布局方面投入精力，不断为想要实现全球梦的人士提供多元化的产品选择；600多名专业文案、100多位精英移民律师、50多人的项目开发团队、10多名前移民官顾问，并与各国政府移民局官员保持良好关系，设身处地站在客户利益角度出发，全球团队一致的专业化服务水平，为您的移民之路保驾护航，成为您心中满意的全球第一品牌。"

  aboutUsBusinessCard:bussinessCardModel={
    name:"jin kan",
    title:"CEO, Funder",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque inventore accusantium tempore dolores sunt.",
    image:"./../../../assets/images/person_1.jpg"
  }




  constructor(private project:ProjectServices) { }

  public getBanners()
  {
    return this.bannerItem;
  }

  public getLogo()
  {
    return this.logo;
  }

  public getFooterInfo()
  {
    var result:footerViewModel =       
    {
      companyDescription:this.companyDescription,
      companyAddress:this.companyAddress,
      companyPhone:this.companyPhone,
      email:this.companyEmail
    };
    return result;

  }

  public getHomeDisplayProjectKey()
  {
    return this.homeDisplayProjectKey;
  }

  public getNewsPageLimit()
  {
    return this.newsPageLimit;
  }

  public getAboutUsInfo()
  {
    var result:aboutUsViewModel = new aboutUsViewModel()
    result.description = this.aboutUsDescription;
    result.bussinessCard = this.aboutUsBusinessCard;
    result.companyAddress = this.companyAddress;
    result.companyPhone = this.companyPhone;
    result.email = this.companyEmail;
    return result;
  }


}
