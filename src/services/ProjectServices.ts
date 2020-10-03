import { Injectable } from '@angular/core';
import { projectCategoryItem, projectTitleItem, projectDetailViewModel } from 'src/models/projectViewModel';
import { projectList } from 'src/models/listItem';
import { table } from 'src/models/table';

@Injectable({
  providedIn: 'root'
})
export class ProjectServices {

  projectTitle:projectTitleItem[] =[
    {
      value:"家庭团聚",
      description:"家庭团聚移民：夫妻担保移民移民的处理速度稳定在1年左右，父母团聚移民2019年改为抢名额制，将在2019年１月下旬重开，名额从2015年的5000个涨到2019年的2万个，处理时间大约在1年左右。",
      imageUrl:"./../../../assets/images/slider-1.jpg",
      projectId:"1"
    },
    {
      value:"留学移民",
      description:"省提名移民留学生移民：大部分省总体的态度是非常积极的，在2017-2018年大部分省提名都做了调整，预计2019年大调整的几率不高。目前比较好的一些省提名移民项目分别有：安省提名，BC省提名，曼省提名，萨省提名，NS省提名等。",
      imageUrl:"./../../../assets/images/slider-2.jpg",
      projectId:"2"
    },
    {
      value:"省提名",
      description:"Express Entry 联邦EE技术移民项目：预计分数不会有太大的降幅，随着留学生的不断增加，进入EE池子的人多过被挑选的人，建议英语较差、或者只想读个大专的申请人，可以转向各个省的提名项目（PNP）。",
      imageUrl:"./../../../assets/images/slider-1.jpg",
      projectId:"3"
    },
    {
      value:"学习签证1",
      projectId:"4"
    },
    {
      value:"学习签证2",
      projectId:"5"
    },
    {
      value:"工作签证",
      projectId:"6"
    }
  ]

  data:projectCategoryItem[] = [
  {
    key:"hot",
    value:"热门项目",
    projectItems:[this.projectTitle[0],this.projectTitle[1],this.projectTitle[2]]
  },
  {
    key:"visa",
    value:"签证项目",
    projectItems:[this.projectTitle[3],this.projectTitle[4],this.projectTitle[5]]

  }];

  flowItems:projectList[]=[
    {
      listId:"1",
      listTitle:"递交申请",
      listCount:3,
      listDescription:["填写表1","填写表2","填写表3"],
    },
    {
      listId:"2",
      listTitle:"审核申请",
      listCount:3,
      listDescription:["审核表1","审核表2","审核表3"],
    },
    {
      listId:"3",
      listTitle:"完成申请",
      listCount:3,
      listDescription:["收到1","收到2","收到3"],
    }
  ]

  projectRequirements:projectList[]=[    
  {
    listId:"1",
    listTitle:"学历",
    listCount:1,
    listDescription:["本科"]
  },
  {
    listId:"2",
    listTitle:"语言 满足任一项",
    listCount:2,
    listDescription:["雅思>7","托福","CELPIP"]
  },
  {
    listId:"3",
    listTitle:"工作经验",
    listCount:2,
    listDescription:["相关行业",">5年"]
  },
  {
    listId:"4",
    listTitle:"资金",
    listCount:1,
    listDescription:["10万加币"]
  }]

  projectFee:table[]=[
    {
      rowsCount:4,
      colsCount:2,
      title:["项目","费用"],
      rows:[
        {
          rowHeading:"学习签证",
          content:["CAD$1000"]
        },
        {
            rowHeading:"工作签证",
            content:["CAD$2000"]
        },
        {
          rowHeading:"省提名",
          content:["CAD$3000"]
        },
        {
          rowHeading:"总共",
          content:["CAD$6000"]
        }
      ],
    },
    {
      rowsCount:2,
      colsCount:2,
      title:["项目","费用"],
      rows:[
        {
          rowHeading:"工作签证",
          content:["CAD$2000"]
        }
      ],
    },
    {
      rowsCount:1,
      colsCount:2,
      title:["项目","费用"],
      rows:[
        {
          rowHeading:"学习签证",
          content:["CAD$1000"]
        }
      ],
    }
  ]

  projectDetail:projectDetailViewModel[] = [
    {
      projectId:"1",
      projectTitle:this.projectTitle[0],
      projectDescription:"房产潜力激增2020年3月，土耳其共售出108670套房产，与2019年同期相比增长了3.4%。房产销量占其中的18.3%，共售出19846套。综合1-3月的销售数据，外国投资者购买土耳其房产的数量与去年同期相比增长了13.8%，一半以上的外国投资者选择在伊斯坦布尔进行房产投资。这样稳定发展又具有潜力的房地产市场，吸引了大量的国内外房产投资者前来土耳其进行投资，土耳其的房产销量呈持续增长的状态。在全球经济缩水的情况下，土耳其房产仍呈现上涨趋势，房产增值潜力不可小觑。2010年至2018年期间，土耳其房价持续上涨，全国房产均价上涨2.5倍，而核心城市伊斯坦布尔更是上涨3倍，成为全球房价增长速度最快的第十大城市；今年1月，土耳其各个城市住宅租金价格同比去年增长了4.6%。未来会如何？　从2018年下半年以来，在土耳其投资回报率前所未有的高。强大的金融和银行监管，加上建筑和房地产市场令人难以置信的增长，让外国投资者非常满意。　无论是诗与远方般的梦幻房产还是投资商用的收益型房产，其投资收益率都高于全球平均水平，未来土耳其将为投资者提供更多的机会。　作为专业入籍移民机构，ACE拥有位于土耳其的海外团队，协助来自各个国家和地区的投资者规划海外身份，让投资者购置满意的房产，顺利获得土耳其身份。目前土耳其投资入籍项目正在火热推广中，诚邀广大移民机构合作伙伴共享投资机遇。　合作咨询热线:0755-8671-383",
      projectFlow:[this.flowItems[0],this.flowItems[1],this.flowItems[2]],
      projectRequirements:[this.projectRequirements[0],this.projectRequirements[1],this.projectRequirements[2],this.projectRequirements[3]],
      projectFee:this.projectFee[1],
      evaluationId:"1"
    },
    {
      projectId:"2",
      projectTitle:this.projectTitle[1],
      projectDescription:"房产潜力激增2020年3月，土耳其共售出108670套房产，与2019年同期相比增长了3.4%。房产销量占其中的18.3%，共售出19846套。综合1-3月的销售数据，外国投资者购买土耳其房产的数量与去年同期相比增长了13.8%，一半以上的外国投资者选择在伊斯坦布尔进行房产投资。这样稳定发展又具有潜力的房地产市场，吸引了大量的国内外房产投资者前来土耳其进行投资，土耳其的房产销量呈持续增长的状态。在全球经济缩水的情况下，土耳其房产仍呈现上涨趋势，房产增值潜力不可小觑。2010年至2018年期间，土耳其房价持续上涨，全国房产均价上涨2.5倍，而核心城市伊斯坦布尔更是上涨3倍，成为全球房价增长速度最快的第十大城市；今年1月，土耳其各个城市住宅租金价格同比去年增长了4.6%。未来会如何？　从2018年下半年以来，在土耳其投资回报率前所未有的高。强大的金融和银行监管，加上建筑和房地产市场令人难以置信的增长，让外国投资者非常满意。　无论是诗与远方般的梦幻房产还是投资商用的收益型房产，其投资收益率都高于全球平均水平，未来土耳其将为投资者提供更多的机会。　作为专业入籍移民机构，ACE拥有位于土耳其的海外团队，协助来自各个国家和地区的投资者规划海外身份，让投资者购置满意的房产，顺利获得土耳其身份。目前土耳其投资入籍项目正在火热推广中，诚邀广大移民机构合作伙伴共享投资机遇。　合作咨询热线:0755-8671-383",
      projectFlow:[this.flowItems[0],this.flowItems[1],this.flowItems[2]],
      projectRequirements:[this.projectRequirements[0],this.projectRequirements[1],this.projectRequirements[2],this.projectRequirements[3]],
      projectFee:this.projectFee[0],
      evaluationId:"2"
    },
    {
      projectId:"3",
      projectTitle:this.projectTitle[2],
      projectDescription:"房产潜力激增2020年3月，土耳其共售出108670套房产，与2019年同期相比增长了3.4%。房产销量占其中的18.3%，共售出19846套。综合1-3月的销售数据，外国投资者购买土耳其房产的数量与去年同期相比增长了13.8%，一半以上的外国投资者选择在伊斯坦布尔进行房产投资。这样稳定发展又具有潜力的房地产市场，吸引了大量的国内外房产投资者前来土耳其进行投资，土耳其的房产销量呈持续增长的状态。在全球经济缩水的情况下，土耳其房产仍呈现上涨趋势，房产增值潜力不可小觑。2010年至2018年期间，土耳其房价持续上涨，全国房产均价上涨2.5倍，而核心城市伊斯坦布尔更是上涨3倍，成为全球房价增长速度最快的第十大城市；今年1月，土耳其各个城市住宅租金价格同比去年增长了4.6%。未来会如何？　从2018年下半年以来，在土耳其投资回报率前所未有的高。强大的金融和银行监管，加上建筑和房地产市场令人难以置信的增长，让外国投资者非常满意。　无论是诗与远方般的梦幻房产还是投资商用的收益型房产，其投资收益率都高于全球平均水平，未来土耳其将为投资者提供更多的机会。　作为专业入籍移民机构，ACE拥有位于土耳其的海外团队，协助来自各个国家和地区的投资者规划海外身份，让投资者购置满意的房产，顺利获得土耳其身份。目前土耳其投资入籍项目正在火热推广中，诚邀广大移民机构合作伙伴共享投资机遇。　合作咨询热线:0755-8671-383",
      projectFlow:[this.flowItems[0],this.flowItems[1],this.flowItems[2]],
      projectRequirements:[this.projectRequirements[0],this.projectRequirements[1],this.projectRequirements[2],this.projectRequirements[3]],
      projectFee:this.projectFee[0],
      evaluationId:"3"
    },
    {
      projectId:"4",
      projectTitle:this.projectTitle[3],
      projectDescription:"房产潜力激增2020年3月，土耳其共售出108670套房产，与2019年同期相比增长了3.4%。房产销量占其中的18.3%，共售出19846套。综合1-3月的销售数据，外国投资者购买土耳其房产的数量与去年同期相比增长了13.8%，一半以上的外国投资者选择在伊斯坦布尔进行房产投资。这样稳定发展又具有潜力的房地产市场，吸引了大量的国内外房产投资者前来土耳其进行投资，土耳其的房产销量呈持续增长的状态。在全球经济缩水的情况下，土耳其房产仍呈现上涨趋势，房产增值潜力不可小觑。2010年至2018年期间，土耳其房价持续上涨，全国房产均价上涨2.5倍，而核心城市伊斯坦布尔更是上涨3倍，成为全球房价增长速度最快的第十大城市；今年1月，土耳其各个城市住宅租金价格同比去年增长了4.6%。未来会如何？　从2018年下半年以来，在土耳其投资回报率前所未有的高。强大的金融和银行监管，加上建筑和房地产市场令人难以置信的增长，让外国投资者非常满意。　无论是诗与远方般的梦幻房产还是投资商用的收益型房产，其投资收益率都高于全球平均水平，未来土耳其将为投资者提供更多的机会。　作为专业入籍移民机构，ACE拥有位于土耳其的海外团队，协助来自各个国家和地区的投资者规划海外身份，让投资者购置满意的房产，顺利获得土耳其身份。目前土耳其投资入籍项目正在火热推广中，诚邀广大移民机构合作伙伴共享投资机遇。　合作咨询热线:0755-8671-383",
      projectFlow:[this.flowItems[0],this.flowItems[2]],
      projectRequirements:[this.projectRequirements[0],this.projectRequirements[1]],
      projectFee:this.projectFee[2],
    },
    {
      projectId:"5",
      projectTitle:this.projectTitle[4],
      projectDescription:"房产潜力激增2020年3月，土耳其共售出108670套房产，与2019年同期相比增长了3.4%。房产销量占其中的18.3%，共售出19846套。综合1-3月的销售数据，外国投资者购买土耳其房产的数量与去年同期相比增长了13.8%，一半以上的外国投资者选择在伊斯坦布尔进行房产投资。这样稳定发展又具有潜力的房地产市场，吸引了大量的国内外房产投资者前来土耳其进行投资，土耳其的房产销量呈持续增长的状态。在全球经济缩水的情况下，土耳其房产仍呈现上涨趋势，房产增值潜力不可小觑。2010年至2018年期间，土耳其房价持续上涨，全国房产均价上涨2.5倍，而核心城市伊斯坦布尔更是上涨3倍，成为全球房价增长速度最快的第十大城市；今年1月，土耳其各个城市住宅租金价格同比去年增长了4.6%。未来会如何？　从2018年下半年以来，在土耳其投资回报率前所未有的高。强大的金融和银行监管，加上建筑和房地产市场令人难以置信的增长，让外国投资者非常满意。　无论是诗与远方般的梦幻房产还是投资商用的收益型房产，其投资收益率都高于全球平均水平，未来土耳其将为投资者提供更多的机会。　作为专业入籍移民机构，ACE拥有位于土耳其的海外团队，协助来自各个国家和地区的投资者规划海外身份，让投资者购置满意的房产，顺利获得土耳其身份。目前土耳其投资入籍项目正在火热推广中，诚邀广大移民机构合作伙伴共享投资机遇。　合作咨询热线:0755-8671-383",
      projectFlow:[this.flowItems[0],this.flowItems[2]],
      projectRequirements:[this.projectRequirements[0]],
      projectFee:this.projectFee[2]
    },
    {
      projectId:"6",
      projectTitle:this.projectTitle[5],
      projectDescription:"房产潜力激增2020年3月，土耳其共售出108670套房产，与2019年同期相比增长了3.4%。房产销量占其中的18.3%，共售出19846套。综合1-3月的销售数据，外国投资者购买土耳其房产的数量与去年同期相比增长了13.8%，一半以上的外国投资者选择在伊斯坦布尔进行房产投资。这样稳定发展又具有潜力的房地产市场，吸引了大量的国内外房产投资者前来土耳其进行投资，土耳其的房产销量呈持续增长的状态。在全球经济缩水的情况下，土耳其房产仍呈现上涨趋势，房产增值潜力不可小觑。2010年至2018年期间，土耳其房价持续上涨，全国房产均价上涨2.5倍，而核心城市伊斯坦布尔更是上涨3倍，成为全球房价增长速度最快的第十大城市；今年1月，土耳其各个城市住宅租金价格同比去年增长了4.6%。未来会如何？　从2018年下半年以来，在土耳其投资回报率前所未有的高。强大的金融和银行监管，加上建筑和房地产市场令人难以置信的增长，让外国投资者非常满意。　无论是诗与远方般的梦幻房产还是投资商用的收益型房产，其投资收益率都高于全球平均水平，未来土耳其将为投资者提供更多的机会。　作为专业入籍移民机构，ACE拥有位于土耳其的海外团队，协助来自各个国家和地区的投资者规划海外身份，让投资者购置满意的房产，顺利获得土耳其身份。目前土耳其投资入籍项目正在火热推广中，诚邀广大移民机构合作伙伴共享投资机遇。　合作咨询热线:0755-8671-383",
      projectFlow:[this.flowItems[0],this.flowItems[2]],
      projectRequirements:[this.projectRequirements[2],this.projectRequirements[3]],
      projectFee:this.projectFee[1]
    },
  ]

  constructor() { }

  public getProjectCategoryItem()
  {
    return this.data;
  }

  public getItemWithCategoryKey(searchKey:string)
  {
    var left:boolean = true;
    var result:projectTitleItem[];
    this.data.forEach(element => {
      if(element.key==searchKey)
      {
        result = element.projectItems;
      }
    });
    result.forEach(element=>{
      element.left = left;
      left = !left;
    });
    return result;
  }

  public getProjectDetailWithId(id:string)
  {
    return this.projectDetail.find(({projectId})=>projectId==id);
  }
}
