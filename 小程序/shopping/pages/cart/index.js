/* 
 1 获取用户收货地址
    1.绑定点击事件
    2.调用小程序内置 api  获取用户的收货地址  wx.chooseAddress
 2 获取用户 对小程序所授予获取地址的 权限 状态  scope
    1.假设 用户 点击获取收货地址的提示框 确定
      scope的值 true    直接调用
    2.假设 用户 从来没有调用过 收货地址的api
      scope的值 undefined   直接调用
    3.假设 用户 点击获取收货地址的提示框 取消
      scope的值 false
      1 诱导用户自己打开授权设置页面 当用户重新给予 获取地址权限的时候 (wx.openSetting)
      2 获取收货地址
    4.把获取到的收货地址 存入到 本地存储中
 3 页面加载完毕
   1 获取本地存储中的地址数据
   2 把数据 设置给data中的一个变量
*/

Page({
  //点击 收货地址
  handleChooseAddress(){
    // 1 获取 权限状态
    wx.getSetting({
      success : (result) => {
        //2获取权限状态：只要发现一些 属性名很怪异的时候 都要使用[" "]来获取属性值
        const scopeAddress = result.authSetting["scope.address"];
        if (scopeAddress === true || scopeAddress === undefined){
          wx.chooseAddress({
            success: (result1) => {
              console.log(result1);
            }
          })
        }else{
          // 3 用户 拒绝权限 先诱导用户打开
          wx.openSetting({
            success: (result2) => {
              // 4 可以调用  收货地址的代码
              wx.chooseAddress({
                success: (result3) => {
                  console.log(result3);
                }
              })
            }
          })
        }
      }
    })
  }
})