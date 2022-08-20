const Manager = require('../lib/Manager');

describe('Manager', () => {
  describe('object', () => {
    it('should be an object', () => {
      let tempMan = new Manager();
      expect(typeof tempMan).toEqual('object');
    });
  });
  describe('name', () => {
    it('should describe the name', () => {
      let name = 'somename';
      let tempMan = new Manager(name);
      expect(tempMan.name).toEqual(name);
    });
  });
  describe('email', () => {
    it('should display the email', () => {
      let email = 'someemail';
      let tempEmail = new Email(email);
      expect(tempEmail.email).toEqual(email);
    });
  });
  describe('officeNumber', () => {
    it('should describe the office number', () => {
      let officeNumber = 'someofficeNumber';
      let tempOff = new officeNumber(officeNumber);
      expect(tempOff.officeNumber).toEqual(officeNumber);
    });
  });
});
