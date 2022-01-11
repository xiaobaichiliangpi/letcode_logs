module.exports = (fn, cases = []) => {
    const failCase = []
    for (let item of cases) {
        const [input, output] = item
        const res = fn(input)
        if (JSON.stringify(res) !== JSON.stringify(output)) {
            failCase.push({ case: item, result: res })
        }
    }
    const successLength = cases.length - failCase.length
    const failStr = failCase.length > 0 
        ? `\n未通过用例如下: \n ${failCase.map((item, idx) => `${idx + 1}. 输入:${item.case[0]}, 期望输出:${JSON.stringify(item.case[1])}, 实际输出:${JSON.stringify(item.result)}`).join('\n')}` 
        : '恭喜你~~~'
    console.log(`测试结果: 总用例(${cases.length}条), 通过(${successLength}/${Math.floor(successLength * 100 / cases.length)}%) ${failStr}`)
}