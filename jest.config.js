module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,vue}",
    "!**/node_modules/**"
  ]
};
