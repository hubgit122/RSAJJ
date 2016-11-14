---
# [RSAJJ](https://github.com/ssqstone/RSAJJ)

---

## General
** RSAJJ ** is built during my class "Lecture notes on cryptography". I held the idea that there should be a standard implementation of RSA on both the front end and the back end of the web. But I didn't find such an implementation but the famous SSL scheme. And with the hope to put what I've learnt in my class into practice, I decided to carry out a simple implementation on both JavaScript and Java, and assure the correct interoperation. By the way, if I had known [Scala](http://www.scala-lang.org/) then, I might have written a single copy of code to run on both side with the help of [Scala.js](http://www.scala-js.org/)

All the implementations are consistent with the standards -- [X.509](https://en.wikipedia.org/wiki/X.509) and [PKCS#1 v2.1](https://en.wikipedia.org/wiki/PKCS#1_v2.1). 

The BigInt classes on both sides were implemented by others, I just translated the word of those standards into programming codes. 

See -- 
* [Java BigInteger](https://docs.oracle.com/javase/7/docs/api/java/math/BigInteger.html)

* [crypto.js](https://github.com/wwwtyro/cryptico.git)

## What's Original
There is also a signature scheme built in both sides, which is of my own design. Even though the prime idea of signature is just the process of encrypt the message by the private key, there are many things to consider in the internet environment because of the introduce of so many third parties, such as:

* Sending the same signed message twice
* Routing the signed message to another party which differs from the intended target
* Or just discard some signed message while sending the other

To solve this problem, I added the information of the time stamp and message id of this session into the plain text. This prevents all these possible attacks above, and can be easily proved of safety under the assumption that the digest and encryption algorithms involved is safe, that is, the digest algorithm is an *Uniform One Way Hash Function* and the encryption function in the encryption algorithm is *Strong One Way Function*. [1]

## Test Cases
I didn't integrate the two sides into a web page, and the test just goes the way that I copy the cipher from one side, and ask to decipher it from the other side through the console or just rewriting the html page. 

The tests are somewhat boring, I just want to omit it. I just wonder if it is true for everyone to think the person is way too naive when one retrospects on oneself. ;-)


[1] [Foundations of Cryptography I](https://www.amazon.com/Foundations-Cryptography-1-Basic-Tools/dp/0521035368/ref=pd_bxgy_14_img_2?_encoding=UTF8&psc=1&refRID=0AJZ76ERVYRVVPS37383)
