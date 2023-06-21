module.exports = {
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['babel-polyfill', 'babel-polyfill/dist/polyfill.min.js'],
                    ['helper', './utils/helper'],
                    ['material-ui/DatePicker', '../custom/DatePicker'],
                    ['material-ui', 'material-ui-ie10']
                ],
                extensions: ['.ts', '.js', '.jsx', '.json']
            }
        }
    },
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "prettier",
        "eslint:recommended",
        "airbnb-base",
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/recommended",
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        project: './tsconfig.json'
    },
    "plugins": [
        "@typescript-eslint",
    ],
    "rules": {
        "no-param-reassign": 0,
        "no-underscore-dangle": 'off',
        "class-methods-use-this": 0,
        "import/no-cycle": 0,
        "no-console": 0,
        "@typescript-eslint/no-empty-interface": 0,
        "max-len": ["error", { "code": 150 }],
        "import/extensions": "off",
        "import/prefer-default-export": "off",
        "@typescript-eslint/ban-types": [
            "error",
            {
                "extendDefaults": true,
                "types": {
                    "Function": false,
                    "Object": false
                }
            }
        ]
    }
}
