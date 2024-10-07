module.exports = {
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts(x)?'],
  collectCoverage: true,

  testEnviroment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spac|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/out/', '/public/'],

  setupFilesAfterEnv: ['<rootDir>/.jest/jest-setup.ts'],
};
