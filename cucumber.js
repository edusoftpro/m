module.exports = {
    default: [
        '--require-module @babel/register',
        '--require-module ts-node/register',
        '--require ./features/**/*.ts',
        '--require ./hooks/**/*.ts',
        '--format node_modules/.bin/cucumber-pretty',
        '--format progress-bar',
        '--format json:./reports/e2e_report.json',
        '--format summary'
    ].join(' ')
};