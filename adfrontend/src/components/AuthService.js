export const AuthService = {
  login: (customerArray) => {
    const user = { ...customerArray, customerId: customerArray._id };
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  },
  logout: () => {
    localStorage.removeItem('loggedInUser');
  },
  isLoggedIn: () => {
    return localStorage.getItem('loggedInUser') !== null;
  },
  getUser: () => {
    return JSON.parse(localStorage.getItem('loggedInUser'));
  },
  clearLoggedInUser: () => {
    localStorage.removeItem('loggedInUser');
  }
};
