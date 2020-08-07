const ftoc = function(fahr) {
return Math.round(((fahr-32) * 5/9)*10)/10
}

const ctof = function(cels) {
return Math.round((cels * 9/5 + 32)*10)/10
}

module.exports = {
  ftoc,
  ctof
}
