1-misol g'ola yuzi
a = Number(prompt("a:"))
b = Number(prompt("b:"))
h = Number(prompt("h:"))

const R = a/2
const r = b/2
h = 9
const l = math.sqrt((R-r)**2 + h*h)
const S = math.pi*(R+r)*l + math.pi*(R*R + r*r)
alert(`{S:.2f}`)
