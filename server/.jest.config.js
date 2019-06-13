module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
  ],
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testURL: 'http://localhost/',
  roots: [
    "<rootDir>/src/", "<rootDir>/tests/"
  ] 
};
