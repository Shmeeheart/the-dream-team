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
});
