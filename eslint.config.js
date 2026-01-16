import expo from "eslint-config-expo/flat";
import prettier from "eslint-plugin-prettier/recommended";

export default [
  ...expo,
  prettier,
  {
    rules: {
      "prettier/prettier": "error",
      "no-unused-vars": "off",
      "react-native/no-unused-styles": "off",
    },
  },
  {
    ignores: ["dist/*", ".expo/*", "node_modules/*"],
  },
];