beforeAll(() => console.log("Before all outer"))

afterAll(() => {
    console.log("After all outer")
})

beforeEach(() => {
    console.log("Before each outer")
})


afterEach(() => {
    console.log("After each outer")
})

test("test outer", () => console.info("outer test"))

describe('inner', () => {
    beforeEach(() => {
        console.log("Before each inner")
    })


    afterEach(() => {
        console.log("After each inner")
    })
    test("test inner", () => console.info("inner test"))
});