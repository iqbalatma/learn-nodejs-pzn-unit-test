test("array simple", ()=>{
    const name = ["iqbal", "atma", "muliawan"]
    expect(name).toEqual(["iqbal", "atma", "muliawan"])
    expect(name).toContain("atma")
})

test("array object", ()=>{
    const people = [
        {
            "name" : "iqbal",
        },
        {
            "name" : "atma",
        },
        {
            "name" : "muliawan",
        }
    ]

    expect(people).toContainEqual({"name":"iqbal"})
})