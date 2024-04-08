import {sum} from "../src/sum.js";

describe('when call sum(10,22)', () => {
    it('should get 32', () => {
        expect(sum(10,22)).toBe(32);
    });

    it.skip('should get 32 but skipped', () => {
        expect(sum(10,22)).toBe(32);
    });
})