module.exports = {
    'accessor-pairs': 2, // 强制 getter 和 setter 在对象中成对出现
    'array-bracket-spacing': 0, // 强制数组方括号中使用一致的空格
    'block-scoped-var': 0, // 强制把变量的使用限制在其定义的作用域范围内
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }], // 强制在代码块中使用一致的大括号风格
    'camelcase': 0, // 强制使用骆驼拼写法命名约定
    'comma-dangle': [2, 'never'], // 禁止末尾逗号
    'comma-spacing': [2, { 'before': false, 'after': true }], // 强制在逗号周围使用空格，目前是逗号之前不用空格，逗号之后才有
    'comma-style': [2, 'last'], // 强制在逗号前后使用一致的空格
    'complexity': 0, // 指定程序中允许的最大环路复杂度
    'computed-property-spacing': 0, // 禁止或强制在计算属性中使用空格
    'consistent-return': 0,
    'consistent-this': 0,
    'constructor-super': 2,
    'curly': [2, 'all'], // 要求遵循大括号约定
    'dot-location': [2, 'property'], // 强制在点号之前或之后换行 (dot-location) 选项 "property" 要求点操作符和属性放在同一行。
    'dot-notation': 0,
    'eol-last': [0, 'never'],
    'eqeqeq': [2, 'always', {'null': 'ignore'}], // 要求使用 === 和 !==
    'func-names': 0,
    'func-style': 0,
    'generator-star-spacing': [2, { 'before': true, 'after': false }], // 强制 generator 函数中 * 号周围有空格
    'getter-return': 0,
    'yield-star-spacing': [2, { 'before': true, 'after': false }], // 强制在 yield* 表达式中 * 周围使用空格
    'guard-for-in': 0,
    'indent': [2, 4, {SwitchCase: 1}], // 强制使用一致的缩进 (indent)
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }], // 强制在对象字面量的属性中键和值之间使用一致的间距
    'linebreak-style': 0,
    'lines-around-comment': 0,
    'max-nested-callbacks': 0,
    'new-cap': [2, { 'newIsCap': true, 'capIsNew': false }], // 要求构造函数首字母大写 (new-cap)
    'new-parens': 2, // 要求调用无参构造函数时带括号
    'newline-after-var': 0,
    'no-alert': 0,
    'no-array-constructor': 2, // 禁止使用 Array 构造函数
    'no-caller': 2, // 禁用 arguments.caller 或 arguments.callee
    'no-catch-shadow': 0,
    'no-cond-assign': 2, // 禁止在条件语句中出现赋值操作符
    'no-console': 0,
    'no-constant-condition': 0,
    'no-continue': 0,
    'no-control-regex': 2, // 禁止在正则表达式中使用控制字符
    'no-debugger': 2, // 禁用 debugger
    'no-delete-var': 2, // 禁止删除变量
    'no-div-regex': 0,
    'no-dupe-args': 2, // 禁止在 function 定义中出现重复的参数
    'no-dupe-keys': 2, // 禁止在对象字面量中出现重复的键
    'no-duplicate-case': 2, // 禁止重复 case 标签
    'no-else-return': 0,
    'no-empty': 0,
    'no-empty-character-class': 2, // 禁止在正则表达式中出现空字符集
    'no-eq-null': 0,
    'no-eval': 2, // 禁用 eval()
    'no-ex-assign': 2, // 禁止对 catch 子句的参数重新赋值
    'no-extend-native': 2, // 禁止扩展原生类型
    'no-extra-bind': 2, // 禁止不必要的 .bind() 调用
    'no-extra-boolean-cast': 2, // 禁止不必要的布尔类型转换
    'no-extra-parens': 0,
    'no-extra-semi': 0,
    'no-fallthrough': 2, // 禁止 case 语句落空
    'no-floating-decimal': 2,
    'no-func-assign': 2, // 禁止对 function 声明重新赋值
    'no-implied-eval': 2, // 禁止使用类似 eval() 的方法
    'no-inline-comments': 0,
    'no-inner-declarations': [2, 'functions'], // 禁止在嵌套的语句块中出现变量或 function 声明
    'no-invalid-regexp': 2, // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-irregular-whitespace': 2, // 禁止在字符串和注释之外不规则的空白
    'no-iterator': 2, // 禁用 __iterator__ 属性
    'no-label-var': 2, // 不允许标签与变量同名
    'no-labels': 0,
    'no-lone-blocks': 2, // 禁用不必要的嵌套块
    'no-lonely-if': 0,
    'no-loop-func': 0,
    'no-mixed-requires': 0,
    'no-mixed-spaces-and-tabs': 2, // 禁止空格和 tab 的混合缩进
    'no-multi-spaces': 1, // 禁止出现多个空格
    'no-multi-str': 0,
    'no-multiple-empty-lines': [1, { 'max': 1 }], // 禁止出现多行空行
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-nested-ternary': 0,
    'no-new': 0, // 禁止使用new产生副作用，即new生成的对象要赋值到某一个参数里面
    'no-new-func': 0,
    'no-new-object': 2, // 禁用 Object 的构造函数
    'no-new-require': 2, // 禁止调用 require 时使用 new 操作符
    'no-new-wrappers': 2, // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-obj-calls': 2, // 禁止把全局对象作为函数调用
    'no-octal': 2, // 禁用八进制字面量
    'no-octal-escape': 2, // 禁止在字符串中使用八进制转义序列
    'no-param-reassign': 0,
    'no-path-concat': 0,
    'no-process-env': 0,
    'no-process-exit': 0,
    'no-proto': 0,
    'no-redeclare': 2, // 禁止多次声明同一变量
    'no-regex-spaces': 2, // 禁止正则表达式字面量中出现多个空格
    'no-restricted-modules': 0,
    'no-return-assign': 2, // 禁止在 return 语句中使用赋值语句
    'no-script-url': 0,
    'no-self-compare': 0,
    'no-sequences': 2, // 禁用逗号操作符
    'no-shadow': 0,
    'no-shadow-restricted-names': 2, // 禁止将标识符定义为受限的名字
    'no-spaced-func': 2,
    'no-sparse-arrays': 2, // 禁用稀疏数组
    'no-sync': 0,
    'no-ternary': 0,
    'no-this-before-super': 2, // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-throw-literal': 2, // 禁止抛出异常字面量
    'no-trailing-spaces': 0, // 禁用行尾空格
    'no-undef': 0, // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef-init': 2,
    'no-undefined': 0,
    'no-underscore-dangle': 0,
    'no-unexpected-multiline': 2, // 禁止出现令人困惑的多行表达式
    'no-unneeded-ternary': 2, // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unreachable': 2, // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
    'no-unused-expressions': 0,
    'no-unused-vars': [0], // 禁止未使用过的变量
    'no-use-before-define': 0,
    'no-var': 0,
    'no-void': 0,
    'no-warning-comments': 0,
    'no-with': 2, // 禁用 with 语句
    'object-curly-spacing': 0,
    'object-shorthand': 0,
    'one-var': [2, { 'initialized': 'never' }], // 强制函数中的变量在一起声明或分开声明，never是分开申明
    'operator-assignment': 0,
    'operator-linebreak': [2, 'after'], //  强制操作符使用一致的换行符风格
    'padded-blocks': 0,
    'prefer-const': 0,
    'quote-props': 0,
    'quotes': [2, 'single', { 'avoidEscape': true }], // 强制使用一致的反勾号、双引号或单引号
    'radix': 2, // 要求必须有基数
    'semi': [2, 'always'],
    'semi-spacing': 0,
    'sort-vars': 0,
    'keyword-spacing': 2,
    'space-before-blocks': [2, 'always'], // 强制在块之前使用一致的空格
    'space-before-function-paren': [2, 'never'], // 强制在 function的左括号之前使用一致的空格
    'space-in-parens': [2, 'never'], // 强制在圆括号内使用一致的空格
    'space-infix-ops': 2, // 要求操作符周围有空格
    'space-unary-ops': [2, { 'words': true, 'nonwords': false }], // 强制在一元操作符前后使用一致的空格
    'spaced-comment': [2, 'always', { 'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!'] }], // 要求或禁止在注释前有空白 (space 或 tab)
    'strict': 0,
    'use-isnan': 2, // 要求使用 isNaN() 检查 NaN
    'valid-jsdoc': 0,
    'valid-typeof': 2, // 强制 typeof 表达式与有效的字符串进行比较
    'vars-on-top': 0,
    'wrap-iife': [2, 'any'], // 要求 IIFE 使用括号括起来
    'wrap-regex': 0,
    'yoda': [2, 'never'] // 要求或禁止 “Yoda” 条件
};
