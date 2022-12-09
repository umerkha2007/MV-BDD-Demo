/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testMatch: ["**/*.steps.ts"],
  transform: {
		"^.+\\.tsx?$": "ts-jest"
	}
};