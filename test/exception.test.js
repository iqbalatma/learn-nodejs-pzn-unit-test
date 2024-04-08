class MyException extends Error {

}

function callMe(name){
    if (name==="iqbal"){
        throw new MyException(`${name} cannot access this method`);
    }

    return name;
}

test("test exception", ()=>{
    expect(()=>{
        callMe("iqbal")
    }).toThrow()

    expect(()=>{
        callMe("iqbal")
    }).toThrow(MyException)

    expect(()=>{
        callMe("iqbal")
    }).toThrow('iqbal cannot access this method')
})