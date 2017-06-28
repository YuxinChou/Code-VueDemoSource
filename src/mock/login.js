
const userMap = {
  admin: {
    retCode: "10000",
    msg: "成功",
    time: "2017-06-27 15:05:06",
    data: {
      adminInfo: {
        adminId: "xxxxxxxxxxxxxx",
        email: "admin@fusio.com.cn",
        password2: "123456",
        adminType: 99,
        nickname: "XXXX",
        realName: "XXXX",
        mobile: "xxxxxxxxxxx",
        createTime: "2017-06-27 14:29:51",
        isValid: 0,
        lastModTime: "2017-06-27 14:29:22",
        password: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        salt: "xxxxxx",
        comment: "xxxx"
      },
      tokenModel: {
        adminId: "xxxxxxxxxxxxxx",
        token: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
      }
    }
  }
}

export default {
  loginByEmail: config => {
    const { email } = config.params;
    return new Promise((resolve, reject) => {
      if (userMap[email.split('@')[0]]) {
        setTimeout(() => {
          resolve([200, 
            userMap[email.split('@')[0]]
          ]);
        }, 500);
      } else {
        reject('账号不正确')
      }
    })
  },
  logout: () => new Promise(resolve => {
    setTimeout(() => {
      resolve([200, {"retCode":"10000","msg":"成功","time":"2017-06-27 15:19:03","data":null}]);
    }, 100);
  })
};
