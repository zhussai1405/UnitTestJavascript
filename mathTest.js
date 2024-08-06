import { assert } from "chai";
import { add } from "../math.js";


describe('Basic Testing Example', function() {

    it('1. Testing add functionality', function() {
         const added = add(3,4);
         assert.strictEqual(7, added);
    });


});

