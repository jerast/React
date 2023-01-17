module.exports = {
   clearMocks: true,
   testEnvironment: 'jest-environment-jsdom',
   setupFiles: ['./jest.setup.js'],
   moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1",
      "^@test/(.*)$": "<rootDir>/test/$1",
      // "^@/firebase(.*)$": "<rootDir>/test/$1",
   },
   transformIgnorePatterns: [],
}