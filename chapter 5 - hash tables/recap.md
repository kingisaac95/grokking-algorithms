# Chapter 5

- You can make a has table by combining a hashfunction with an array.
- Collisions are bad. You need a hash function that minimizes collisions.
- Hash tables have really fast search, insert, and delete.
- Hash tables are good for modeling relationships from one item to another item.
- Once your load factor<sup id="a1">[1](#f1)</sup> is greater than 0.7, it's time to resize your hash table.
- Hash tables are used for caching data (for example, with a web server).
- Hash tables are great for catching duplicates.

<b id="f1">1</b> Load factor = `Number of items in hash table` ÷ `Total number of slots` [^](#a1)
