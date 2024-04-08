test("test to be", ()=>{
    const name = "iqbal";
    const hello = `Hello, ${name}`

    expect(hello).toBe('Hello, iqbal');
})


test("to equal", ()=>{
    const person = {
        "name" : "iqbal",
        "age" : 20
    }

    expect(person).toEqual({
        name : "iqbal",
        age : 20
    })
})