const Intern = require('../lib/Intern');

describe('Intern', () => {
  describe('school', () => {
    it('should describe the school', () => {
      let school = 'someschool';
      let tempSchool = new Intern("name", 2, "email", school);
      expect(tempSchool.school).toEqual(school);
    });
  });
});
