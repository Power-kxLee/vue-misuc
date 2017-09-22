const rules = require('./rules');
module.exports = {
    root: true,   //  eslint找到这个标识后，不会再去父文件夹中找eslint的配置文件
    parser: 'babel-eslint',   //使用babel-eslint来作为eslint的解析器
    parserOptions: {      // 设置解析器选项
        sourceType: 'module',    // 表明自己的代码是ECMAScript模块
        ecmaVersion: 6 //设置为 3， 5 (默认)， 6、7 或 8 指定你想要使用的 ECMAScript 版本。
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    //extends: 'standard',  // 继承eslint-config-standard里面提供的lint规则
    // required to lint *.vue files
    plugins: [    // 使用的插件eslint-plugin-html. 写配置文件的时候，可以省略eslint-plugin-
        'html'
    ],
    // 启用额外的规则或者覆盖基础配置中的规则的默认选项
    rules: rules,
    globals: {    // 声明在代码中自定义的全局变量
        'jQuery': true,
        '$': true,
        'navigator': true,
        'localStorage': true,
        'window': true,
        'self': true,
        'parent': true,
        'document': true,
        'location': true
    },
    env: {            // 定义预定义的全局变量,比如browser: true，这样你在代码中可以放心使用宿主环境给你提供的全局变量。
        browser: false,
        node: true, // Node.js global variables and Node.js scoping.
        commonjs: false,
        es6: true //启动ES6监测
    }
}
