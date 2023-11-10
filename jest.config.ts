import type { Config } from 'jest';

export default {
  rootDir: __dirname,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  setupFiles: ['<rootDir>/jest.polyfills.ts'],
  transform: {
    '^.+\\.tsx?$': '@swc/jest',
  },
  testEnvironmentOptions: {
    /**
     * @note Opt-out from JSDOM using browser-style resolution
     * for dependencies. This is simply incorrect, as JSDOM is
     * not a browser, and loading browser-oriented bundles in
     * Node.js will break things.
     *
     * Consider migrating to a more modern test runner if you
     * don't want to deal with this.
     */
    customExportConditions: [''],
  },
} satisfies Config;
