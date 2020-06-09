function User(name, gender, age, registered, req, userStatus) {
    this.userName = name;
    this.userGender = gender;
    this.userAge = age;
    this.userCode = this.userGender + this.userAge;
    this.registered = false;
    this.userReq = req;
    this.userStatus = null;
}

export { User }

















