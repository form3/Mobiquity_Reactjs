import { createRange, parseURLParams } from '../utils';

test('createRange will generate an array of numbers in sequence', () => {
    expect(createRange(2005, 2015)).toEqual([2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015])
});

test('parseURLParams will return an object literal from a query string', () => {
    expect(parseURLParams('?foo=2&bar=4&buzz=fun'))
        .toEqual({
            foo: '2',
            bar: '4',
            buzz: 'fun'
        });    
});