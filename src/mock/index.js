import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import loginAPI from './login';

const mock = new MockAdapter(axios);

// 邮箱登录接口
mock.onPost('/login/loginbyemail').reply(loginAPI.loginByEmail);
// 登出接口
mock.onPost('/login/logout').reply(loginAPI.logout);

export default mock;
