module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "next/core-web-vitals",
        "airbnb", "prettier"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        "react/function-component-definition": "off",
        'import/prefer-default-export': 'off',
        'default-param-last': 'off',
        'react/no-array-index-key': 'off',
        'no-console': 'off',
        'indent': 'off',
        "@typescript-eslint/ban-ts-comment": "off",
        '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'as' }],
        "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
        "jsx-quotes": ["error", "prefer-double"],
        "react/jsx-closing-bracket-location": ["error"],
        "react/jsx-closing-tag-location": ["error"],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
              "js": "never",
              "jsx": "never",
              "ts": "never",
              "tsx": "never"
            }
         ]
    }
}
