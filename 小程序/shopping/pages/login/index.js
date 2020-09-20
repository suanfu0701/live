// pages/login/index.js
Page({
  handleGetUserInfo(e){
    // console.log(e);

    const {userinfo}=e.detail;
    wx.setStorageSync("userinfo", userinfo);
    wx.navigateBack({
      delya:1
    });
    
  }
})