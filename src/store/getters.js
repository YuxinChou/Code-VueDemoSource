const getters = {
  token: state => state.user.token,
  uid: state => state.user.uid,
  email: state => state.user.email,
  auth_type: state => state.user.auth_type,
  status: state => state.user.status,
  roles: state => state.user.roles
  
};
export default getters
