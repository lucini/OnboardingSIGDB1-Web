module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/src/tsconfig.spec.json'
    }
  },
  "preset": "jest-preset-angular",
  "setupFilesAfterEnv": [
    "<rootDir>/setup-jest.ts"
  ],
  "transformIgnorePatterns": [
    "node_modules/(?!@ngrx|ngx-socket-io)" // List any packages here that error
  ],
  "transform": {
    "^.+\\.(ts|js|html)$": "ts-jest"
  },
  "testPathIgnorePatterns": [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/cypress/",
    "<rootDir>/src/test.ts",
  ],
  moduleNameMapper: {
    '@app/(.*)$': '<rootDir>/src/app/$1',
    '@env/(.*)$': '<rootDir>/src/environments/$1',
    '@core/(.*)$': '<rootDir>/src/app/core/$1',
    '@shared/(.*)$': '<rootDir>/src/app/shared/$1',
    '@page/(.*)$': '<rootDir>/src/app/page/$1',
  },
  verbose: true
};