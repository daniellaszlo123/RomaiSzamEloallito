QUnit.module('romaiSzam', function() {
    QUnit.test('a romaiSzam függvény létezik-e?', function(assert) {
      assert.ok(romaiSzam, "létezik a fizzbuzz");
    });
    QUnit.test('a romaiSzam függvény-e?', function(assert) {
      assert.ok(typeof romaiSzam==="function", "a romaiSzam fv");
    });    

    QUnit.test('n=1', function(assert) {
      assert.equal(romaiSzam(1),"I");
    });

    QUnit.test('n=2', function(assert) {
      assert.equal(romaiSzam(2),"II");
    });

    QUnit.test('n=3', function(assert) {
      assert.equal(romaiSzam(3),"III");
    });

    QUnit.test('n=4', function(assert) {
      assert.equal(romaiSzam(4),"IV");
    });
  });