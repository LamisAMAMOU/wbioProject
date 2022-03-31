class LoginPage {
  //Page Objects
  get txtUserName() {
    return $("#inputusername");
  }
  get txtPassword() {
    return $("#inputpassword");
  }
  get btnLogIn() {
    return $('button[type="submit"]');
  }

  //Workflow For the Page
  async UserLogin(_userId, _password) {
    await (await this.txtUserName).setValue(_userId);
    await (await this.txtPassword).setValue(_password);
    await (await this.btnLogIn).click();
  }
}
module.exports = new LoginPage();
