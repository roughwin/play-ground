import { LLParse } from "llparse"
import { writeFileSync } from "fs"

const p = new LLParse("myfsm")

// 创建状态节点 start
const start = p.node("start")

// 创建调用节点 onMatch
const onMatch = p.invoke(
    p.code.match("onMatch"),
    {
        0: start
    },
    p.error(1, "onMatch error")
)

// start 状态匹配到 hello 之后，进入 onMatch节点
// 否则输出 expect "hello"
start.match("hello", onMatch).otherwise(p.error(1, 'expect "hello"'))

// 编译状态机
// 状态机从 start 开始
const artifacts = p.build(start)

const jsfile = artifacts.js;



writeFileSync('o.js', jsfile);
// console.log('----- BITCODE -----');
// console.log(artifacts.bitcode);  // buffer
// console.log('----- BITCODE END -----');
// console.log('----- HEADER -----');
// console.log(artifacts.header);
// console.log('----- HEADER END -----');