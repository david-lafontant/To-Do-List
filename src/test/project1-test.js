
import addItem from '../mock/addItem.js';

describe('Add task to list', () => {

  test('test if new task has been stored.', () => {
    expect(addItem()).toBeTruthy();
  });

});