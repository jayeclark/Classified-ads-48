const XORCipher = {
  encode: function (key, data) {
    data = xor_encrypt(key, data)
    return b64_encode(data)
  },
  decode: function (key, data) {
    data = b64_decode(data)
    return xor_decrypt(key, data)
  }
}

const b64_table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

function b64_encode (data) {
  let o1; let o2; let o3; let h1; let h2; let h3; let h4; let bits; let r; let i = 0; let enc = ''
  if (!data) { return data }
  do {
    o1 = data[i++]
    o2 = data[i++]
    o3 = data[i++]
    bits = o1 << 16 | o2 << 8 | o3
    h1 = bits >> 18 & 0x3f
    h2 = bits >> 12 & 0x3f
    h3 = bits >> 6 & 0x3f
    h4 = bits & 0x3f
    enc += b64_table.charAt(h1) + b64_table.charAt(h2) + b64_table.charAt(h3) + b64_table.charAt(h4)
  } while (i < data.length)
  r = data.length % 3
  return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3)
}

function b64_decode (data) {
  let o1; let o2; let o3; let h1; let h2; let h3; let h4; let bits; let i = 0; const result = []
  if (!data) { return data }
  data += ''
  do {
    h1 = b64_table.indexOf(data.charAt(i++))
    h2 = b64_table.indexOf(data.charAt(i++))
    h3 = b64_table.indexOf(data.charAt(i++))
    h4 = b64_table.indexOf(data.charAt(i++))
    bits = h1 << 18 | h2 << 12 | h3 << 6 | h4
    o1 = bits >> 16 & 0xff
    o2 = bits >> 8 & 0xff
    o3 = bits & 0xff
    result.push(o1)
    if (h3 !== 64) {
      result.push(o2)
      if (h4 !== 64) {
        result.push(o3)
      }
    }
  } while (i < data.length)
  return result
}

function keyCharAt (key, i) {
  return key.charCodeAt(Math.floor(i % key.length))
}

function xor_encrypt (key, data) {
  return data.split('').map((c, i) => {
    return c.charCodeAt(0) ^ keyCharAt(key, i)
  })
}

function xor_decrypt (key, data) {
  return data.map((c, i) => {
    return String.fromCharCode(c ^ keyCharAt(key, i))
  }).join('')
}
