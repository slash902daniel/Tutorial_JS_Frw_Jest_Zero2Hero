const woof = require('./woof');

test('should return number of woof', () => {
    'something';
    const result = woof('hi there!');
    console.log(result);

    //Assertions
    expect(result).toBe('9woof!'); //For str/numbers
    expect(result).not.toBe('woof!');

    const object1 = {a:"one", b:"two"}
    const object2 = {a:"one", b:"two"}
    const object3 = {a:"zero", b:"two"}

    //Will PASS
    expect(object1).toEqual(object2); //For objects and arrays
    //Will FAIL
    //expect(object1).toEqual(object3); //For objects and arrays

    const arr1 = ['a','b','c'];
    expect(arr1).toContain('b');

    expect(result).toMatch(/\dwoof/i);

});

test.skip('Should return NULL when not given a string', () => {
    const result = woof(100);
    console.log(result);

    expect(result).toBeNull();
});

test('Should return ERROR', () => {
    expect(() => woof()).toThrow('MUST');
    expect(() => woof()).toThrowError();
});


// test('Force Failed test', () => {
//     'somethin.g';
//     throw Error('Expected to fail here!');
// });