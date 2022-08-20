const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('object', () => {
    it('should be an object', () => {
      let tempEmp = new Employee();
      expect(typeof tempEmp).toEqual('object');
    });
  });
  describe('name', () => {
    it('should describe the name', () => {
      let name = 'somename';
      let tempEmp = new Employee(name);
      expect(tempEmp.name).toEqual(name);
    });
  });
  describe('email', () => {
    it('should ddisplay the email address', () => {
      let email = 'someemail';
      let tempEmail = new Employee(email);
      expect(tempEmail.name).toEqual(email);
    });
  });
});
