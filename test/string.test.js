test("test string", ()=>{
    const value = "iqbal atma muliawan"

    expect(value).toBe("iqbal atma muliawan");
    expect(value).toEqual("iqbal atma muliawan");
    expect(value).toMatch(/awan/);
})