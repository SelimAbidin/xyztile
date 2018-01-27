




/**
 * 
 *  Credits belongs to https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames 
 */

function long2tile( lon, zoom ) { 
    return Math.floor( ( lon + 180 ) / 360 * Math.pow( 2 , zoom ) )
}

function lat2tile( lat, zoom )  {
    return Math.floor(( 1 - Math.log( Math.tan( lat * Math.PI / 180 ) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI ) / 2 * Math.pow( 2 , zoom ) )
}

function tile2long( x ,z ) {
    return ( x / Math.pow( 2 ,z ) * 360 - 180 )
}
   
function tile2lat( y , z ) {
    let n = Math.PI - 2 * Math.PI * y / Math.pow(2,z)
    return 180 / Math.PI * Math.atan(0.5 * ( Math.exp(n) - Math.exp(-n) ) )
}

module.export = {
    long2tile : long2tile,
    lat2tile : lat2tile,
    tile2long : tile2long,
    tile2lat : tile2lat,
}