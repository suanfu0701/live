export const request=(params)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      success:(result)=>{
        resolve(redult);
      },
      fail:(err)=>{
        reject(err);
      }
    });
  })
}

