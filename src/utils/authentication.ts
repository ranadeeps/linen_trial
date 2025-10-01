export const isLoggedIn = () => {
  try {
    const token = localStorage.getItem("token");
    return token ? true : false;
  } catch (error) {
    alert("Error while authentication");
  }
};

export const save_token = (token: string) => {
  try {
    localStorage.setItem("token", token);
  } catch (error) {
    alert("Error while logging in");
  }
};

export const logout = () => {
  try {
    localStorage.clear();
  } catch (error) {
    alert("Error while logging out");
  }
};
