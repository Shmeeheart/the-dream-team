const Intern = require('../lib/Intern');

describe('Intern', () => {
  describe('object', () => {
    it('should be an object', () => {
      let tempInt = new Intern();
      expect(typeof tempInt).toEqual('object');
    });
  });
  describe('name', () => {
    it('should describe the name', () => {
      let name = 'somename';
      let tempInt = new Intern(name);
      expect(tempInt.name).toEqual(name);
    });
  });
  describe('email', () => {
    it('should display the email', () => {
      let email = 'someemail';
      let tempEmail = new Email(email);
      expect(tempEmail.email).toEqual(email);
    });
  });
  describe('github', () => {
    it('should describe the github', () => {
      let github = 'somegithub';
      let tempGit = new Github(github);
      expect(tempGit.github).toEqual(github);
    });
  });
});
