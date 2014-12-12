var hashGenerator = {
    length: 16,
    hash  : function (m)
    {
        return MD5(m);
    }
};

var ModulusLength = 128;
var MaxBlockSize = ModulusLength - 2 * hashGenerator.length - 2;

function parseBigInt(str, r)
{
    return new BigInteger(str, r);
}

function doModPow(em, e, n)
{
    return parseBigInt(bytesToHexString(em), 16).modPow(e, n).toByteArray();
}

function addConterpart(n, e)
{
    this.nn = n;
    this.ee = e;
    this.lhash = hashGenerator.hash(n.toByteArray());
    this.count = 0;
    this.lastTimeStamp = "0000000000000";
}

//整数, 填充到len长, 不检查
function i2osp(i, len)
{
    var result = new Array(len);

    for (var j = 0; j < len; j++)
    {
        result[j] = i & 255;
        i >>>= 8;
    }
    return result;
}

function maskGen(seed, len, offset, srclen)
{
    offset = offset || 0;
    srclen = srclen || seed.length;

    var k = divideNoRemain(len, hashGenerator.length);
    var result = new Array(len);
    var x = new Array(srclen + 4);
    copyRange(seed, offset, x, 0, srclen);

    offset = 0;
    var i;
    for (i = 0; i < k; ++i)
    {
        var c = i2osp(i, 4);
        copyRange(c, 0, x, srclen, 4);
        md5 = hashGenerator.hash(x);
        copyRange(md5, 0, result, offset, hashGenerator.length);
        offset += hashGenerator.length;
    }
    if (offset < len)
    {
        c = i2osp(i, 4);
        copyRange(c, 0, x, srclen, 4);
        var md5 = hashGenerator.hash(x);

        copyRange(md5, 0, result, offset, len - offset);
    }

    return result;
}

function trimToK(data)
{
    if (data.length == ModulusLength)
    {
        return data;
    }
    else if (data.length > ModulusLength)
    {
        return data.slice(data.length - ModulusLength);
    }
    else
    {
        var pad = new Array(ModulusLength - data.length);
        for (var i = 0; i < pad.length; i++)
        {
            pad[i] = 0
        }

        return pad.concat(data);
    }
}

function encryptBlock(data, offset, len, e, n, lhash)
{
    // 初始化加密块, 默认全置0 {1'b0, h' maskedSeed, h' lhash, k-mlen-2h-2' ps, 1'b1, len'm}
    var em = new Array(ModulusLength);
    var k = ModulusLength - data.length - 1;
    for (var i = (hashGenerator.length << 1) + 1; i < k; ++i)
    {
        em[i] = 0;
    }

    for (i = 0; i < hashGenerator.length + 1; ++i)
    {
        em[i] = 0;
    }

    copyRange(lhash, 0, em, hashGenerator.length + 1, hashGenerator.length);
    em[ModulusLength - len - 1] = 1;
    copyRange(data, offset, em, ModulusLength - len, len);

    var seed = hashGenerator.hash(string2codeBytes("" + Math.random()));
    copyRange(seed, 0, em, 1, hashGenerator.length);
    var dbMask = maskGen(seed, ModulusLength - hashGenerator.length - 1);
    xorNoCopy(em, dbMask, hashGenerator.length + 1, dbMask.length);
    var seedMask = maskGen(em, hashGenerator.length, hashGenerator.length + 1, ModulusLength - 1 - hashGenerator.length);
    xorNoCopy(em, seedMask, 1, dbMask.length);
    var en = doModPow(em, e, n);

    return trimToK(en);
}

function decryptBlock(data, offset, e, n, lhash)
{
    // {1'b0, h' maskedSeed, {h' lhash, k-mlen-2h-2' ps, 1'b1, len'm}}
    var c = new Array(ModulusLength);
    copyRange(data, offset, c, 0, ModulusLength);

    var em = trimToK(doModPow(c, e, n));

    var seedMask = maskGen(em, hashGenerator.length, hashGenerator.length + 1, ModulusLength - 1 - hashGenerator.length);

    xorNoCopy(em, seedMask, 1, hashGenerator.length);

    var dbMask = maskGen(em, ModulusLength - hashGenerator.length - 1, 1, hashGenerator.length);

    xorNoCopy(em, dbMask, hashGenerator.length + 1, ModulusLength - hashGenerator.length - 1);


    for (var i = 0; i < hashGenerator.length; i++)
    {
        if (em[hashGenerator.length + 1 + i] != lhash[i])
        {
            throw("data invalid");
        }
    }

    i = (hashGenerator.length << 1) + 1;
    for (; em[i] == 0; i++)
    {
    }
    if (em[i++] != 1)
    {
        throw("data invalid");
    }
    var result = new Array(ModulusLength - i);
    copyRange(em, i, result, 0, ModulusLength - i);
    return result;
}

function decrypt(data, e, n, lhash)
{
    e = e || this.d;
    n = n || this.n;
    lhash = lhash || this.myhash;

    var decryptedData = [];
    var inputLen = data.length;
    var offSet = 0;
    // 对数据分段解密
    while (inputLen - offSet > 0)
    {
        decryptedData = decryptedData.concat(decryptBlock(data, offSet, e, n, lhash));
        offSet += ModulusLength;
    }
    return decryptedData;
}

function encrypt(data, e, n, lhash)
{
    e = e || this.e;
    n = n || this.n;
    lhash = lhash || this.myhash;

    var inputLen = data.length;
    var offSet = 0;
    var encryptedData = [];

    while (inputLen - offSet > 0)
    {
        encryptedData = encryptedData.concat(encryptBlock(data, offSet, Math.min(inputLen - offSet, MaxBlockSize), e, n, lhash));
        offSet += MaxBlockSize;
    }
    return encryptedData;
}

function sign(m)
{
    var s = new String(m);

    s += "#" + getPaddedHex(new Date().getTime(), 11) + getPaddedHex(this.count++, 2);

    var h = hashGenerator.hash(string2codeBytes(m));
    var sig = encryptBlock(h, 0, h.length, this.d, this.n, this.lhash);

    m += "`" + bytes2base64(sig);
    return m;
}

function verify(m)
{
    var strings = m.split("`");
    var thisTimeStamp = strings[0].substring(strings[0].length() - 13);
    if (thisTimeStamp <= this.lastTimeStamp)
    {
        return false;
    }

    var h = decryptBlock(string2codeBytes(base64toBytes(strings[1])), 0, this.ee, this.nn, this.myhash);
    var restored = hashGenerator.hash(string2codeBytes(strings[0]));

    for (var i = 0; i < h.length; i++)
    {
        if (h[i] != restored[i])
        {
            return false;
        }
    }

    this.lastTimeStamp = thisTimeStamp;
    return true;
}

// "empty" RSA key constructor
function RSAKey()
{
    this.n = null;
    this.e = null;
    this.d = null;
    this.p = null;
    this.q = null;

    this.ee = null;
    this.nn = null;
    this.lhash = null;
    this.myhash = null;
    this.count = 0;
    this.lastTimeStamp = null;

    this.generate();
}

// Generate a new random private key B bits long, using  expt E
function RSAGenerate()
{
    var B = 1024, E = "10001";
    var rng = new SeededRandom();
    var qs = B >> 1;
    this.e = new BigInteger(E, 16);

    for (; ;)
    {
        for (; ;)
        {
            this.p = new BigInteger(B - qs, 1, rng);
            if (this.p.subtract(BigInteger.ONE).gcd(this.e).compareTo(BigInteger.ONE) == 0 && this.p.isProbablePrime(10))
            {
                break;
            }
        }
        for (; ;)
        {
            this.q = new BigInteger(qs, 1, rng);
            if (this.q.subtract(BigInteger.ONE).gcd(this.e).compareTo(BigInteger.ONE) == 0 && this.q.isProbablePrime(10))
            {
                break;
            }
        }
        if (this.p.compareTo(this.q) <= 0)
        {
            var t = this.p;
            this.p = this.q;
            this.q = t;
        }
        var p1 = this.p.subtract(BigInteger.ONE);
        var q1 = this.q.subtract(BigInteger.ONE);
        var phi = p1.multiply(q1);
        if (phi.gcd(this.e).compareTo(BigInteger.ONE) == 0)
        {
            this.n = this.p.multiply(this.q);
            this.d = this.e.modInverse(phi);
            break;
        }
    }

    this.myhash = hashGenerator.hash(this.n.toByteArray());
}

RSAKey.prototype.generate = RSAGenerate;
RSAKey.prototype.encrypt = encrypt;
RSAKey.prototype.decrypt = decrypt;
RSAKey.prototype.sign = sign;
RSAKey.prototype.verify = verify;
RSAKey.prototype.addConterpart = addConterpart;
