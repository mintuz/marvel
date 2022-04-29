export default {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['/node_modules/'],
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
    setupFilesAfterEnv: ['./jest.setup.ts'],
}
