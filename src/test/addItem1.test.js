
import { addItem1 } from '../mock/addItem1';

  test('test if new task has been stored.', () => {
    let description = "item 1";
    expect(addItem1(description)).toBeTruthy();
  });
  