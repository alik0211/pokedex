import assert from 'assert'
import Pokemon from '../src/components/pokemon'
describe('Should Component Contain Object', function() {
  describe('#Pokemon Component', function() {
    it('moreInfo property should be as object', function() {
      var P = new Pokemon();
      assert.deepEqual(P.state.moreInfo.constructor, Object);
    });
  });
});
