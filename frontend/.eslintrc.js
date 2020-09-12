module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  rules: {
    "react/prop-types": 0,
    "react/destructuring-assignment": 0,
    "react/static-property-placement": 0,
    "jsx-a11y/alt-text": 0,
    "react/jsx-props-no-spreading": 0,
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "max-len": ["error", { code: 120 }],
  },
};
