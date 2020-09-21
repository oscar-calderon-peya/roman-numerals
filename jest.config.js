module.exports = {
  moduleFileExtensions: ['js'],
  collectCoverageFrom: ['**/*.{js}', '!**/node_modules/**'],
  testPathIgnorePatterns: ['/node_modules/'],
  clearMocks: true,
  testRunner: 'jest-circus/runner',
};
