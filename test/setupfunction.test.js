import {sum} from "../src/sum.js";

beforeAll(()=>{
    console.log("before all");
})

afterAll(()=>{
    console.log("after all");
})

beforeEach(()=>{
    console.info("before each")
})


afterEach(()=>{
    console.info("after each")
})


test("test setup function", ()=>{
    console.info("first test")
    expect(sum(10,10)).toBe(20)
})

test("test setup function 2", ()=>{
    console.info("second test")
    expect(sum(10,10)).toBe(20)
})


