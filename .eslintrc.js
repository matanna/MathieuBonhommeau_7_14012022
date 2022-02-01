module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "rules": {
    },
    ignorePatterns: [
        '/dist/*',
        'webpack.config.js',
        '.eslintrc.js',
        '/test/*'
    ]
};
