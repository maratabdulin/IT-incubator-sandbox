function colorOf(r,g,b){
    const resR = r.toString(16).length === 1 ? '0' + r.toString(16) : r.toString(16);
    const resG = g.toString(16).length === 1 ? '0' + g.toString(16) : g.toString(16);
    const resB = b.toString(16).length === 1 ? '0' + b.toString(16) : b.toString(16);
    return (`#${resR}${resG}${resB}`)
}
