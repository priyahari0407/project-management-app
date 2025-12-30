//mock fetch/axios
const authService = {
  async login({ username, password }) {
    if (username === "admin" && password === "password") {
      return { token: "fake-jwt", user: { id: 1, name: "Admin" } };
    }
    throw new Error("Invalid Credential");
  },
};
export default authService;
