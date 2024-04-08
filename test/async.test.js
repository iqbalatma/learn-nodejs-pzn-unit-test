export const sayHelloAsync = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name) {
                resolve(`Hello ${name}`);
            } else {
                reject("name is empty")
            }
        }, 1000)
    })
}


test("test async function", async ()=>{
    const result = await sayHelloAsync("iqbal")

    expect(result).toBe(`Hello iqbal`);
})


test("test async matcher", async ()=>{
    await expect(sayHelloAsync("iqbal")).resolves.toBe("Hello iqbal")
    await expect(sayHelloAsync()).rejects.toBe("name is empty")
})