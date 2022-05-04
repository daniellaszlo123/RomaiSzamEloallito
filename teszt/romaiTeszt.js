QUnit.module('romaiSzam', function() {
    QUnit.test('a romaiSzam függvény létezik-e?', function(assert) {
      assert.ok(romaiSzam, "létezik a fizzbuzz");
    });
    QUnit.test('a romaiSzam függvény-e?', function(assert) {
      assert.ok(typeof romaiSzam==="function", "a romaiSzam fv");
    });    

    QUnit.test('n=1', function(assert) {
      assert.equal(iBetuk(1),"I");
    });

    QUnit.test('n=2', function(assert) {
      assert.equal(iBetuk(2),"II");
    });

    QUnit.test('n=3', function(assert) {
      assert.equal(iBetuk(3),"III");
    });

    QUnit.test('n=4', function(assert) {
      assert.equal(negyEs9Kozott(4),"IV");
    });

    QUnit.test('n=5', function(assert) {
      assert.equal(negyEs9Kozott(5),"V");
    });

    QUnit.test('n=6', function(assert) {
      assert.equal(negyEs9Kozott(6),"VI");
    });

    QUnit.test('n=7', function(assert) {
      assert.equal(negyEs9Kozott(7),"VII");
    });

    QUnit.test('n=8', function(assert) {
      assert.equal(negyEs9Kozott(8),"VIII");
    });

    QUnit.test('n=9', function(assert) {
      assert.equal(negyEs9Kozott(9),"IX");
    });

    QUnit.test('n=10', function(assert) {
      assert.equal(romaiSzam(10),"X");
    });

    QUnit.test('n=11', function(assert) {
      assert.equal(romaiSzam(11),"XI");
    });
    
    QUnit.test('n=27', function(assert) {
      assert.equal(romaiSzam(27),"XXVII");
    });
    
    QUnit.test('n=39', function(assert) {
      assert.equal(romaiSzam(39),"XXXIX");
    });
    
    QUnit.test('n=40', function(assert) {
      assert.equal(romaiSzam(40),"XL");
    });

  });