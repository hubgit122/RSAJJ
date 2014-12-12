var hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
var base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

function divideNoRemain(a, b)
{
    return (a - a % b) / b;
}

function print(string)
{
    document.write(string + "\n\n");
}
function bytesToHexString(bytes)
{
    var str = "";
    for (var i = 0; i < bytes.length; ++i)
    {
        var byte = bytes[i];
        str += hexDigits[byte >>> 4 & 0xf];
        str += hexDigits[byte & 0xf];
    }
    return str;
}

function int2bytes(i)
{
    var bytes = [];
    for (; i > 0; i >>>= 8)
    {
        bytes.push(i & 255);
    }
    return bytes.reverse();
}

function string2codeBytes(string)
{
    var bytes = [];
    for (var i = 0; i < string.length; i++)
    {
        var c = string.charCodeAt(i);
        bytes = bytes.concat((c >>> 8) & 255, c & 255);
    }
    return bytes;
}

function codeBytes2string(bytes)
{
    var string = "";
    for (var i = 0; i < bytes.length;)
    {
        var c = bytes[i++];
        c = c << 8 | bytes[i++];

        string += String.fromCharCode(c);
    }
    return string;
}

function utf8Encode(string)
{
    var bytes = [];

    for (var n = 0; n < string.length; n++)
    {
        var c = string.charCodeAt(n);

        if (c < 128)
        {
            bytes.push(c);
        }
        else if (c < 2048)
        {
            bytes.push((c >> 6) | 192);
            bytes.push((c & 63) | 128);
        }
        else
        {
            bytes.push((c >> 12) | 224);
            bytes.push(((c >> 6) & 63) | 128);
            bytes.push((c & 63) | 128);
        }
    }

    return bytes;
}

function utf8decode(bytes)
{
    var str = "";
    for (var i = 0; i < bytes.length;)
    {
        var c = bytes[i++];
        if (c < 128)
        {
        }
        else if (c < 224)
        {
            c = ((c & 63) << 6) | (bytes[i++] & 127);
        }
        else if (c < 240)
        {
            c = ((c & 15) << 12) | ((bytes[i++] & 127) << 6) | (bytes[i++] & 127);
        }
        else
        {
            c = ((c & 7) << 18) | ((bytes[i++] & 127) << 12) | ((bytes[i++] & 127) << 6) | (bytes[i++] & 127)
        }
        str += String.fromCharCode(c);
    }
    return str;
}

function bytes2base64(bytes)
{
    var a, c, n;
    var r = '', l = 0, s = 0;
    var bl = bytes.length;

    for (n = 0; n < bl; n++)
    {
        c = bytes[n];
        if (s == 0)
        {
            r += base64Chars.charAt((c >> 2) & 63);
            a = (c & 3) << 4;
        }
        else if (s == 1)
        {
            r += base64Chars.charAt((a | (c >> 4) & 15));
            a = (c & 15) << 2;
        }
        else if (s == 2)
        {
            r += base64Chars.charAt(a | ((c >> 6) & 3));
            l += 1;
            r += base64Chars.charAt(c & 63);
        }
        l += 1;
        s += 1;
        if (s == 3)
        {
            s = 0;
        }
    }
    if (s > 0)
    {
        r += base64Chars.charAt(a);
        l += 1;
        r += '=';
        l += 1;
    }
    if (s == 1)
    {
        r += '=';
    }
    return r;
}

function base64toBytes(t)
{
    var c, n;
    var r = [], s = 0, a = 0;
    var tl = t.length;
    for (n = 0; n < tl; n++)
    {
        c = base64Chars.indexOf(t.charAt(n));
        if (c >= 0)
        {
            if (s)
            {
                r.push(a | (c >> (6 - s)) & 255);
            }
            s = (s + 2) & 7;
            a = (c << s) & 255;
        }
    }
    return r;
}

function getPaddedHex(i, len)
{
    var str = [];
    for (var j = len - 1; j >= 0; j--)
    {
        str[j] = hexDigits[i & 15];
        i >>>= 4;
    }
    return str.join("");
}

function hexStringToBytes(str)
{
    var bytes = new Array(str.length >> 1);
    str = str.toUpperCase();
    for (var i = 0; i < str.length;)
    {
        bytes[i >> 1] = (hexDigits.indexOf(str.charAt(i++)) << 4) | hexDigits.indexOf(str.charAt(i++));
    }
    return bytes;
}

function copyRange(src, srcPos, dst, dstPos, len)
{
    for (var i = 0; i < len; i++)
    {
        dst[dstPos + i] = src[srcPos + i]
    }
}

function xorNoCopy(dst, src, offset, len)
{
    for (var i = offset; i < dst.length && i < src.length && i < offset + len; i++)
    {
        dst[i] ^= src[i - offset];
    }
}
