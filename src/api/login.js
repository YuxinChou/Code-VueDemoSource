import { fetch } from '@/utils/fetch';

export function loginByEmail(email, password) {
  const data = {
    email,
    password
  };
  return fetch({
    // url: '/login/loginbyemail',
    url: '/loginController/login',
    method: 'post',
    params: data
  });
}

export function logout() {
  return fetch({
    // url: '/login/logout',
    url: '/loginController/logout',
    method: 'post'
  });
}
