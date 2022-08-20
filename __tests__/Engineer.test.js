const Employee = require('../lib/Engineer');

const Engineer', () => {
  describe('object', () => {
    it('should be an object', () => {
      let tempEng = new Engineer();
      expect(typeof tempEng).toEqual('object');
    });
  });  
  describe('email', () => {
    it('should display the email', () => {
      let email = 'someemail';
      let tempEmail = new Email (email);
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