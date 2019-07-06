const MenuController = require("../controllers/MenuController");
const Contact = require("../db/models").Contact;

describe("MenuController", () => {

  beforeEach(() => {
    this.menu = new MenuController();
  });



  describe("#remindMe()", () => {

    it("should return a string", () => {
      expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit");
    });

  });

});
