const Manager = require('../lib/Manager');

describe('Manager', () => {
  describe('officeNumber', () => {
    it('should describe the office number', () => {
      let officeNumber = 'someofficeNumber';
      let tempOff = new Manager('name', 2, 'email', officeNumber);
      expect(tempOff.officeNumber).toEqual(officeNumber);
    });
  });
});
