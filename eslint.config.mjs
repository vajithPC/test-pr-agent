import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // ✅ Ignore folders
  {
    ignores: [".next/**", "node_modules/**", "dist/**", "build/**"],
  },

  // ✅ React recommended FIRST
  pluginReact.configs.flat.recommended,

  // ✅ Your custom rules AFTER (this overrides)
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      js,
      react: pluginReact,
    },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "no-unused-vars": "error",
      "no-console": "error",

      // ✅ override React rules
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
]);