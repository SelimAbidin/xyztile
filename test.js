var assert = require('assert');
var {long2tile, lat2tile, tile2long, tile2lat} = require('./')

describe('long2tile', function () {
  
    it('Lon : 28.8798191, level : 15 Should be 38025', function() {
        assert.equal(38025, long2tile(28.8798191, 15));
    });

})

describe('lat2tile', function () {
  
    it('Lon : 41.0202982, level : 15 Should be 23851', function() {
        assert.equal(23851, lat2tile(41.0202982, 15));
    });
    
})

describe('tile2long', function () {
  
    it('tile2long', function() {
        assert.equal(28.8775634765625, tile2long(38025, 15));
    });
    
})

describe('tile2lat', function () {
  
    it('tile2lat', function() {
        assert.equal(41.0174560546875, tile2lat(23851, 15));
    });
    
})

describe('tile2long === long2tile', function () {
  
    it('equality', function() {
        assert.equal(true, tile2long(38025, 15) === tile2long(long2tile(28.8775634765625, 15), 15));
    });
    
})

describe('tile2lat === lat2tile', function () {
  
    it('equality', function() {
        assert.equal(true, tile2lat(23851, 15) === tile2lat(lat2tile(41.0174560546875, 15), 15));
    });
    
})