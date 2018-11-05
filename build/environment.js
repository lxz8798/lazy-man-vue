// 获取命令行变量
const configArgv = JSON.parse(process.env.npm_config_argv).original;
const original = configArgv.slice(1);
const stage = original[1] ? original[1].replace(/-/g, '') : '';

module.exports = {
    stage
}