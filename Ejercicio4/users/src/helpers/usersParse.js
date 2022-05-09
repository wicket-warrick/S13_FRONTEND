import users from "../data/users.json";
const isAdult = (age) => {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
};
export const userInformation = users.map((user) => {
  return {
    userName: user.name.first + " " + user.name.last,
    userLocation: user.location.city + " (" + user.location.country + ")",
    userAvatar: user.picture.large,
    userAdult: isAdult(user.dob.age),
  };
});
