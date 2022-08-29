const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  describe('github', () => {
    it('should describe the github', () => {
      let github = 'somegithub';
      let tempGit = new Engineer('name', 2, 'email', github);
      expect(tempGit.github).toEqual(github);
    });
  });
});
