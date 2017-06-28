import { loginByEmail, logout } from '@/api/login';
// import Cookies from 'js-cookie';

const user = {
  state: {
    email: '',
    uid: localStorage.getItem('uid'),
    auth_type: '',
    status: '',
    token: localStorage.getItem('token'),
    // token: Cookies.get('X-Ivanka-Token'),
    roles: []
  },

  mutations: {
    SET_EMAIL: (state, email) => {
      state.email = email;
    },
    SET_UID: (state, uid) => {
      state.uid = uid;
    },
    SET_AUTH_TYPE: (state, type) => {
      state.auth_type = type;
    },
    SET_STATUS: (state, status) => {
      state.status = status;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    }
  },

  actions: {
    // 邮箱登录
    LoginByEmail({ commit }, userInfo) {
      const email = userInfo.email.trim();
      return new Promise((resolve, reject) => {
        loginByEmail(email, userInfo.password).then(response => {
          if(response.retCode==="10000") {
            const data = response.data;
            localStorage.token = data.tokenModel.adminId+'_'+data.tokenModel.token;
            localStorage.uid = data.adminInfo.adminId;
            // Cookies.set('X-Ivanka-Token', data.tokenModel.adminId+'_'+data.tokenModel.token);
            commit('SET_TOKEN', data.tokenModel.adminId+'_'+data.tokenModel.token);
            commit('SET_EMAIL', data.adminInfo.email);
            commit('SET_ROLES', ['admin']);
            commit('SET_UID', data.adminInfo.adminId);
            resolve();
          } else {
            reject('账号或密码不正确');
          }
        }).catch(error => {
          reject(error);
        });
      });
    },

    // 登出
    LogOut({ commit }) {
      return new Promise((resolve, reject) => {
        logout().then(response => {
          if(response.retCode==="10000") {
            commit('SET_TOKEN', '');
            commit('SET_ROLES', []);
            localStorage.removeItem("token");
            localStorage.removeItem("uid");
            // Cookies.remove('X-Ivanka-Token');
            resolve();
          } else {
            reject('登出失败');
          }
        }).catch(error => {
          reject(error);
        });
      });
    }

  }
};

export default user;
