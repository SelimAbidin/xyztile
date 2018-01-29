




function tileCountOnX(level) {
    return  2 << level
}

function tileCountOnY(level) {
    return  1 << level
}


function long2tile(lon,level) { 

    let tileSize = 360 / tileCountOnX(level)
    return Math.floor((lon + 180) / tileSize)
}

function lat2tile(lon,level) { 

    let tileSize = 180 / tileCountOnY(level)
    return Math.floor((lon + 90) / tileSize)
}


function tile2long( x , level ) {

    let tileSize = 360 / tileCountOnX(level)
    let lon = (x * tileSize) - 180
    return lon
}

function tile2lat( y , level ) {
    
    let tileSize = 180 / tileCountOnY(level)
    let lat = (y * tileSize) - 90
    return lat
}

// function long2tile(lon,zoom) { 
//     return (Math.floor((lon+180)/360*Math.pow(2,zoom)))
// }

// function tile2long( x ,z ) {
//     return (x/Math.pow(2,z)*360-180)
// }
   
// function tile2lat( y , z ) {
//     let n = Math.PI - 2 * Math.PI * y / Math.pow(2,z)
//     return (180/Math.PI*Math.atan(0.5*(Math.exp(n)-Math.exp(-n))))
// }

module.exports = {
    long2tile : long2tile,
    lat2tile : lat2tile,
    tile2long : tile2long,
    tile2lat : tile2lat,
}