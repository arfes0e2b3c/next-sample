/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */

const nextJest = require("next/jest");

const createJestConfing = nextJest({ dir: "./" });

const customJestConfig = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node.modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  preset: "ts-jest",
};

module.exports = createJestConfing(customJestConfig);
