import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  // eslint-disable-next-line unicorn/prefer-module
  cacheDirectory: `${__dirname}/.jest_cache`,
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  cache: true,
  testRegex: '(.*.(test|spec)).(jsx?|tsx?|ts?)$',
  moduleFileExtensions: ['ts', 'js', 'json'],
  setupFiles: ['./src/testing/preRun.ts'],
  collectCoverage: true,
  // globals: {
  //   'ts-jest': {
  //     tsconfig: `tsconfig.test.json`,
  //   },
  // },
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.(t|j)sx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },
  useStderr: true,
  silent: true,
  // testPathIgnorePatterns: [],
  verbose: true,
  collectCoverageFrom: ['**/src/**/*.ts', '!**/node_modules/**', '!**/*.test.data.ts'],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputName: 'junit-TEST.xml',
      },
    ],
  ],
  coveragePathIgnorePatterns: [
    '.*test\\.data\\.ts$,migrations.*.ts$,(.*.(test|spec)).(jsx?|tsx?)$,(tests/.*.mock).(jsx?|tsx?)$',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura'],
};

export default config;
