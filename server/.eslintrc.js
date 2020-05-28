module.exports = {
    'env': {
        'commonjs': true,
        'es6': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 11
    },
    'rules': {
        'quotes': [
            'error',
            'single'
        ],
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'semi': [
            2,
            'never'
        ],
        curly: [
            'error',
            'multi'
        ],
        eqeqeq: [
            'error',
            'always'
        ]
    }
}