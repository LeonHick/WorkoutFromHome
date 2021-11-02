const { Builder, By } = require("selenium-webdriver");
const { expect } = require("chai");

const localURL = "http://localhost:3000";

const driver = new Builder().forBrowser("chrome").build();

describe("Can get to homepage", () => {
  it("The title of the page should be Workout From Home", async () => {
    await driver.get(localURL);
    expect(await driver.getTitle()).to.eql("Workout From Home");
  });
});

describe("Navbar Tests", () => {
  const navBarItems = [
    {
      label: "home",
      pathname: "/",
    },
    {
      label: "workouts",
      pathname: "/workouts",
    },
    {
      label: "warmups & stretches",
      pathname: "/stretches",
    },
    {
      label: "about us",
      pathname: "/aboutus",
    },
  ];

  it("The nav bar should have as many items as the list defined in this test", async () => {
    const nav_button_container = await driver.findElement(
      By.name("navbar-button-container")
    );
    expect(
      (await nav_button_container.findElements(By.xpath("./child::*"))).length
    ).to.eql(navBarItems.length);
  });

  it("Each of the defined nav bar items should exist", async () => {
    for (let { label } of navBarItems) {
      await driver.findElement(
        By.name(`nav-bar-link-to-${label.toLowerCase()}`)
      );
    }
  });

  it("Each nav button should take you to the right place", async () => {
    for (let { label, pathname } of navBarItems) {
      const el = await driver.findElement(
        By.name(`nav-bar-link-to-${label.toLowerCase()}`)
      );
      await el.click();
      expect(await driver.getCurrentUrl()).to.eql(localURL + pathname);
    }
  });
});

after(async () => driver.quit());
