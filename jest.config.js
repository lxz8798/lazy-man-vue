module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  coverageReporters: ["html", "text-summary", "lcov"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,vue}",
    "!**/node_modules/**"
  ]
};
