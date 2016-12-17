# TypesECMAScript®2015 (ES 6) Language Specification


## Data Types and Values  

1. Undefined  
The Undefined type has exactly one value, called undefined.  
Any variable that has not been assigned a value has the value undefined.  

2. Null  
The Null type has exactly one value, called null.  

3. Boolean  
The Boolean type represents a logical entity having two values, called true and false.

4. String  
The String type is the set of all ordered sequences of zero or more 16-bit unsigned integer values (“elements”) up to a maximum length of 2 53 -1 elements.  
The String type is generally used to represent textual data in a running ECMAScript program, in which case each element in the String is treated as a UTF-16 code unit value.  

5. Symbol  
The Symbol type is the set of all non-String values that may be used as the key of an Object property (6.1.7).  
Each possible Symbol value is unique and immutable.  
Each Symbol value immutably holds an associated value called [[Description]] that is either undefined or a String value.  

6. Number  
The Number type has exactly 18437736874454810627 (that is, 2^64-2^53 +3) values, representing the double-precision 64-bit format IEEE 754-2008 values as specified in the IEEE Standard for Binary Floating-Point Arithmetic, except that the 9007199254740990 (that is, 2^53-2) distinct “Not-a-Number” values of the IEEE Standard are represented in ECMAScript as a single special NaN value.  
(Note that the NaN value is produced by the program expression NaN.)  

7. Object  
An Object is logically a collection of properties.  
Each property is either a data property, or an accessor property:  
+ A data property associates a key value with an ECMAScript language value and a set of Boolean attributes.  
+ An accessor property associates a key value with one or two accessor functions, and a set of Boolean attributes. 
The accessor functions are used to store or retrieve an ECMAScript language value that is associated with the property.  

Properties are identified using key values. A property key value is either an ECMAScript String value or a Symbol value.  
All String and Symbol values, including the empty string, are valid as property keys. A property 
name is a property key that is a String value.


















