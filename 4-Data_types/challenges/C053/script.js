let str = "Hello";

str.test = 5;

alert(str.test);

// No, it will not work. It will return undefined, and in strict mode it will throw an error, since str is of the primitive type string — it is not possible to add a property to a primitive type, as that is only possible with objects.

// No error occurs in non-strict mode because the language creates a temporary wrapper object when we try to access the property, adds the property to it, but then immediately discards it. So when we try to access that property again, the wrapper object no longer exists, returning undefined.

// In strict mode, the wrapper object is not even created, so attempting to add a property to a primitive type throws an error immediately.
