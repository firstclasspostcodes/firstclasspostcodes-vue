import { render } from '@testing-library/vue';
import { axe } from 'jest-axe';

import Select from './Select.vue';

describe('<Select />', () => {
  describe('when there are no addresses', () => {
    it('renders nothing', () => {
      const provide = {
        classNames: {},
      };

      const { container } = render(Select, { provide });

      expect(container.children.length).toBe(0);
    });
  });

  describe('when addresses length is 0', () => {
    it('renders nothing', () => {
      const provide = {
        classNames: {},
      };

      const props = {
        addresses: [],
      };

      const { container } = render(Select, { props, provide });

      const option = container.querySelector('select > option');

      expect(option).toHaveTextContent('No addresses found');
    });
  });

  describe('when addresses are provided', () => {
    it('renders the correct classNames', async () => {
      const provide = {
        classNames: {
          select: {
            container: 'test-container',
            label: 'test-label',
            select: 'test-select',
          },
        },
      };

      const props = {
        addresses: [['ID:0', 'VALUE:0']],
      };

      const { container, baseElement } = render(Select, { props, provide });

      const div = container.querySelector('div');
      const select = container.querySelector('select');
      const label = container.querySelector('label');

      expect(div).toHaveClass('test-container');
      expect(label).toHaveClass('test-label');
      expect(select).toHaveClass('test-select');

      expect(
        await axe(baseElement, {
          rules: {
            region: { enabled: false },
          },
        })
      ).toHaveNoViolations();
    });

    it('renders the matching addresses', () => {
      const provide = {
        classNames: {},
      };

      const props = {
        addresses: [['ID:0', 'VALUE:0']],
      };

      const { container } = render(Select, { props, provide });

      const option = container.querySelectorAll('select > option');

      expect(option[0]).toHaveTextContent('Choose an address...');
      expect(option[1]).toHaveAttribute('value', 'ID:0');
      expect(option[1]).toHaveTextContent('VALUE:0');
    });
  });
});
