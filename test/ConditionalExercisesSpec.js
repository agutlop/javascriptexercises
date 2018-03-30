import { expect } from 'chai';
import ConditionalExercises from '../src/ConditionalExercises';

describe('Conditional Exercises', () => {

  const cond = new ConditionalExercises();

  describe('Working with booleans', () => {

    it('should return if the param is true or not', () => {
      expect(cond.isTrue(true)).to.be.equal(true);
      expect(cond.isTrue(false)).to.be.equal(false);
    });

    it('should return if the param is false or not', () => {
      expect(cond.isFalse(true)).to.be.equal(false);
      expect(cond.isFalse(false)).to.be.equal(true);
    });

    it('should return the negation of param', () => {
      expect(cond.negation(true)).to.be.equal(false);
      expect(cond.negation(false)).to.be.equal(true);
    });

    it('should return left AND right result', () => {
      expect(cond.andOperator(false, false)).to.be.equal(false);
      expect(cond.andOperator(true, false)).to.be.equal(false);
      expect(cond.andOperator(false, true)).to.be.equal(false);
      expect(cond.andOperator(true, true)).to.be.equal(true);
    });

    it('should return left OR right result', () => {
      expect(cond.orOperator(false, false)).to.be.equal(false);
      expect(cond.orOperator(true, false)).to.be.equal(true);
      expect(cond.orOperator(false, true)).to.be.equal(true);
      expect(cond.orOperator(true, true)).to.be.equal(true);
    });

    it('should return left XOR right result', () => {
      expect(cond.xorOperator(false, false)).to.be.equal(false);
      expect(cond.xorOperator(true, false)).to.be.equal(true);
      expect(cond.xorOperator(false, true)).to.be.equal(true);
      expect(cond.xorOperator(true, true)).to.be.equal(false);
    });

  });

  describe('Working with integers', () => {

    it('should return if the param is more than zero', () => {
      expect(cond.isMoreThanZero(2)).to.be.equal(true);
      expect(cond.isMoreThanZero(-2)).to.be.equal(false);
      expect(cond.isMoreThanZero(0)).to.be.equal(false);

    });

    it('should return if the param is less or equal to zero', () => {
      expect(cond.isLessOrEqualToZero(4)).to.be.equal(false);
      expect(cond.isLessOrEqualToZero(0)).to.be.equal(true);
      expect(cond.isLessOrEqualToZero(-4)).to.be.equal(true);
    });

    it('should return if the n is more than m', () => {
      expect(cond.isMoreThan(5, 3)).to.be.equal(true);
      expect(cond.isMoreThan(3, 3)).to.be.equal(false);
      expect(cond.isMoreThan(2, 3)).to.be.equal(false);
    });

    it('should return the larger of both nums', () => {
      expect(cond.maxNum(2, 2)).to.be.equal(2);
      expect(cond.maxNum(2, 3)).to.be.equal(3);
      expect(cond.maxNum(3, 2)).to.be.equal(3);
    });

    it('should return if num is even', () => {
      expect(cond.isEven(0)).to.be.equal(true);
      expect(cond.isEven(1)).to.be.equal(false);
      expect(cond.isEven(2)).to.be.equal(true);
    });

    it('should return if num is odd', () => {
      expect(cond.isOdd(0)).to.be.equal(false);
      expect(cond.isOdd(1)).to.be.equal(true);
      expect(cond.isOdd(2)).to.be.equal(false);
    });

    it('should return if n is multiple of m', () => {
      expect(cond.isMultiple(2, 4)).to.be.equal(true);
      expect(cond.isMultiple(3, 4)).to.be.equal(false);
      expect(cond.isMultiple(4, 4)).to.be.equal(true);
      expect(cond.isMultiple(0, 4)).to.be.equal(false);
    });

  });

});
