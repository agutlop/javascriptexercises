/**
 * javascriptexercises
 *
 * Copyright © 2016 agutlop. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import IfElseExercises, { hello } from '../src/IfElseExercises';

xdescribe('IfElseExercises1', () => {

  describe('IfElseExercises.hello()', () => {

    it('should return welcome message for a named user', () => {
      const ifelseexercises = new IfElseExercises();
      const message = ifelseexercises.hello();
      expect(message).to.be.equal('hello');
    });

    it('should return welcome message for a named user2', () => {
      const message = hello();
      expect(message).to.be.equal('hello2');
    });

  });

});
