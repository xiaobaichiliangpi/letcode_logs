module.exports = (fn, cases = []) => {
    const failCase = []
    for (let item of cases) {
        const [output, ...input] = item
        const res = fn(...input)
        if (JSON.stringify(res) !== JSON.stringify(output)) {
            failCase.push({ output, input, result: res })
        }
    }
    const successLength = cases.length - failCase.length
    const failStr = failCase.length > 0 
        ? `\n未通过用例如下: \n ${failCase.map((item, idx) => `${idx + 1}. 输入:${JSON.stringify(item.input)}, 期望输出:${JSON.stringify(item.output)}, 实际输出:${JSON.stringify(item.result)}`).join('\n')}` 
        : '恭喜你~~~'
    console.log(`测试结果: 总用例(${cases.length}条), 通过(${successLength}/${Math.floor(successLength * 100 / cases.length)}%) ${failStr}`)
}