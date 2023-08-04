module.exports = {
    settings: {
        'import/resolver': {
            alias: true
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
        "import-alias"
    ],
    "rules": {
        "import-alias/import-alias": [
            "error",
            {
                "relativeDepth": 0,
                "aliases": [
                    { "alias": "@src", "matcher": "^src" }, // src/modules/app/test -> @src/modules/app/test
                    { "alias": "@test", "matcher": "^test\/unit" }, // test/unit/modules/app -> @test/modules/app
                    { "alias": "@testRoot", "matcher": "^(test)\/e2e" } // test/e2e/modules/app -> @testRoot/e2e/modules/app
                ]
            }
        ],
        "no-param-reassign": 0,
        "no-underscore-dangle": 'off',
        "class-methods-use-this": 0,
        "import/no-cycle": 0,
        "no-console": 0,
        "@typescript-eslint/no-empty-interface": 0,
        "max-len": ["error", { "code": 155 }],
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
