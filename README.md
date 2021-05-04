# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dylan_mclovin/lotide`

**Require it:**

`const _ = require('@dylan_mclovin/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arrayA, arrayB)`: asserts the two arrays are equal
* `assertEqual(actual, expected)`: compares your expected outcome with your actual outcome
* `assertObjectsEqual(object1, object2)`: compares two objects to see if they are the same
* `countLetters(string)`: counts the amount of times each letter shows up in a string
* `countOnly(allItems, itemsToCount)`: counts the amount of times a specified item shows up in an array
* `eqArrays(array1,array2)`: compares two arrays and checks if they are equal
* `eqObjects(object1, object2)`: compares two objects and checks if they are equal
* `findKey(object, callback)`: finds the key for a nested object value
* `findKeyByValue(object, value)`: finds the key when given the value
* `head(array)`: returns the head of the array
* `middle(array)`: returns the middle of the array, one value for an odd length array two values for an even lenght array 
* `tail(array)`: returns the tail end of an array 
* `letterPositions(sentence)`: returns the index of specified element
* `map(array, callback)`: takes in an array and returns a new array with only elements specified by index
* `takeUntill(array, callback)`: pushes elements into a new array until a specifiecd point the returns the new array
* `without(want, dontWant)`: creates a new array with only the elements you want
