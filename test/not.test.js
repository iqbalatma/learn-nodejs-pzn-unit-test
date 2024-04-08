test("string.not", ()=>{
    const value = "value";

    expect(value).not.toBe("haha")
    expect(value).not.toEqual("haha")
    expect(value).not.toMatch(/ss/)
})

test("number.not", ()=>{
    const value = 3+5;

    expect(value).not.toBe(7)
    expect(value).not.toBeGreaterThan(10)
})