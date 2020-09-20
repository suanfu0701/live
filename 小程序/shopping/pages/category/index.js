import { request } from "../../request/index.js"
Page({
  data: {
    //左侧的菜单数据
    leftMenuList:[],
    //右侧的商品数据
    rightContent:[],
    //被点击的左侧菜单
    currentIndex:0
  },
  //接口的返回数据
  Catse:[],
  onLoad: function (options) {
    // this.getCates();
  },
  //获取分类数据
  getCates(){
    request({
      url:"https://api.zbztb.cn/api/pubilc/v1/categorise"
    })
      .then(res =>{
        // console.log(res);
        this.Catse=res.data.messges;

        //构造左侧的大菜单数据
        let leftMenuList=this.Catse.map(v=>v.cat_name);
        //构造右侧商品数据
        let rightContent = this.Catse[0].childern;
        this.setData({
          leftMenuList,
          rightContent
        })
      })
  },
  //左侧菜单点击事件
  handleItemTap(e){
    // console.log(e);
    /* 
    1.获取被点击的标题身上的索引
    2.给data中的currentIndex赋值就可以了
    3.根据不同的索引来渲染右侧的商品内容
    */
    // const {index} =e.currentTarget.dataset;
   
    // let rightContent = this.Catse[index].childern;
    this.setData({
      // currentIndex: index,
      // rightContent
    })
  }
})