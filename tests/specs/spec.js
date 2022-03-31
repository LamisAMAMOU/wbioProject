const LoginPage = require("../pageObjects/LoginPageObject");
describe("inHeart Login", () => {
  it("should navigate to the webdriverIO homepage", async () => {
    await browser.url("https://tagada.inheart.fr/");
    await LoginPage.UserLogin("lcadour", "lcadour");
    await expect(browser).toHaveUrl("https://tagada.inheart.fr/");
  });
});
