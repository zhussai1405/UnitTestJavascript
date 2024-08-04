import { assert } from "chai";

describe('Basic Assertion Examples', function() {

    it('1. Testing boolean functionality', function() {
         
        let boolVar = true;
        assert.strictEqual(boolVar, true, "Boolean value is not true");

        //boolVar = false;
        assert.strictEqual(boolVar, false, "Boolean value is not true");
        
    });


});