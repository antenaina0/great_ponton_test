import js from '@eslint/js';
import { configs as tsConfigs } from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';

export default [
    js.configs.recommended,
    tsConfigs.recommended,
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: "@typescript-eslint/parser",
            sourceType: "module",
            ecmaVersion: 2020,
        },
        plugins: {
            prettier
        },
        extends: [
            "plugin:prettier/recommended",
            "next/core-web-vitals",
            "plugin:storybook/recommended"
        ],
        rules: {
            ...tsConfigs.recommended.rules,
            ...js.configs.recommended.rules,
            "prettier/prettier": "error"
        },
        settings: {
            "import/resolver": {
                typescript: {}
            }
        }
    }
];
