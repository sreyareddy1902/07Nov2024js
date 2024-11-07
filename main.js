
//by using string literal
let a="hello"
console.log(a)

let a1="45"
console.log(a1)

//by using string constructor

let b1=String("hello")
console.log(b1)

let b2=String("25")
console.log(b2)

let b3=String(45)
console.log(b3)

//methods
//slice()

let c="hello world"
console.log(c.slice())
console.log(c.slice(1))
console.log(c.slice(1,0)) //starting index is greater than ending index so result is empty string
console.log(c.slice(1,6))
console.log(c.slice(-1,-4))
console.log(c.slice(-1,4))
console.log(c.slice(-7,-2))

//substring()
let c1="hello javascript"
console.log(c1.substring())
console.log(c1.substring(0))
console.log(c1.substring(1,2))
console.log(c1.substring(2,1))
console.log(c1.substring(-1,7))

//substr()
let d="hello javascript"
console.log(d.substr())
console.log(d.substr(0))
console.log(d.substr(0,4))
console.log(d.substr(2,8))

//trim()
let e="    hello javascript  "
console.log(e)    
console.log(e.trim())
document.write(e,"<br>")
document.write(e.trim())

//trimStart()
let f="    hello javascript     "
console.log(f)
console.log(f.trimStart())

//trimEnd()
let g="     hello javascript     "
console.log(g)
console.log(g.trimEnd())

//padStart()
let h="hello"
console.log(h.padStart(7,"hi"))
console.log(h.padStart(10,"hi"))

//padEnd()
let i="hello"
console.log(i.padEnd(10,"ram"))

//replace()
let j="he is a sofware enginer and he lives in ap"
console.log(j.replace("he" ,"ram"))

//replaceAll()
let k="he is a sofware enginer and he lives in ap"
console.log(k.replaceAll("he" ,"ram"))

//split()
let l="he is a sofware enginer and he lives in ap"
console.log(l)
console.log(l.split())
console.log(l.split("",3))
console.log(l.split("",50))


//indexOf()
let m="hello world hello world"
console.log(m.indexOf())
console.log(m.indexOf("hello"))
console.log(m.indexOf("world"))
console.log(m.indexOf("World"))
console.log(m.indexOf("o"))
console.log(m.indexOf("o",5))
console.log(m.indexOf("ello",13))

//lastIndexOf()
let n="hello javscript hii javascript"
console.log(n.lastIndexOf())
console.log(n.lastIndexOf("hi",20))
console.log(n.lastIndexOf("j"))
console.log(n.lastIndexOf("j",25))

//length()
let o="hello"  //last index=4--->length-1
console.log(o.length)