import { add, substract, mul, divide } from '../lib/simple-math.js';

describe( 'Simple math functions', () => {
    test( 'Add two numbers', () =>  {
        expect( add(1,2)).toBe(3);
    });

    test( 'Subtract two numbers', () => {
        expect( substract( 2,1 ) ).toBe(1);
    });
    
    test( 'Multiply two numbers', () => {
        expect( mul(1,2)).toBe(2);
    });

    test( 'Divide two numbers', () => {
        expect( divide( 2, 2)).toBe(1);
    });
    
})
