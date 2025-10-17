import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest', // use ts-jest preset
  testEnvironment: 'jsdom', // simulate browser
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1' // for "@/..." imports
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // optional for jest-dom
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  }
}

export default config
