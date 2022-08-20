const Engineer', () => {
  describe('object', () => {
    it('should be an object', () => {
      let tempEng = new Engineer();
      expect(typeof tempEng).toEqual('object');
    });
  });
  describe('engineer', () => {
    it('should describe the engineer', () => {
      let engineer = 'somename';
      let tempEmp = new Employee(name);
      expect(tempEmp.name).toEqual(name);
    });
  });
});