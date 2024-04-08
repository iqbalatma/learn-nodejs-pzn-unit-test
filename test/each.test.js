import {sum} from "../src/sum.js";

test("sum 1", ()=>{
    expect(sum(1,2)).toBe(3);
})

test("sum 2", ()=>{
    expect(sum(1,4)).toBe(5);
})

const table = [
    [
        [1,2], 3,
    ],
    [
        [3,4], 7,
    ],
    [
        [5,6], 11,
    ]
]

test.each(table)("test sum(%s) should result %i", (numbers, expected)=>{
    expect(sum(...numbers)).toBe(expected);
})