import { render, fireEvent } from '@testing-library/vue';
import { axe } from 'jest-axe';

import Input from './Input.vue';

describe('<Input />', () => {
  let classNames;

  beforeEach(() => {
    classNames = {};
  });

  describe('when the button is clicked', () => {
    it('fires the lookup event', async () => {
      const handleLookup = jest.fn();
      const { container, baseElement } = render(Input, {
        provide: { classNames },
        listeners: { lookup: handleLookup },
      });
      const button = container.querySelector('button');
      const input = container.querySelector('input[type=text]');
      await fireEvent.update(input, 'test');
      await fireEvent.click(button);
      expect(handleLookup).toHaveBeenCalledWith('test');

      expect(
        await axe(baseElement, {
          rules: {
            region: { enabled: false },
          },
        })
      ).toHaveNoViolations();
    });
  });

  describe('when [Enter] is pressed', () => {
    it('fires the lookup event', async () => {
      const handleLookup = jest.fn();
      const { container } = render(Input, {
        provide: { classNames },
        listeners: { lookup: handleLookup },
      });
      const input = container.querySelector('input[type=text]');
      await fireEvent.update(input, 'test');
      await fireEvent.keyUp(input, { key: 'Enter' });
      expect(handleLookup).toHaveBeenCalledWith('test');
    });
  });
});
