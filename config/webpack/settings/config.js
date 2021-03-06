const path = require('path');

module.exports = {
    prod: {
        env: {NODE_ENV: '"production"'},
        publicPath: '//static.360buyimg.com/finance/testApp/jcubeProduction/myProject/1.0.1/',
        outputPath: path.resolve('./', 'build')
    },
    dev: {
        env: {NODE_ENV: '"development"'},
        outputPath: '/',
        port: '8089'
    }
};