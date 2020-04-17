import { render } from '@testing-library/vue';
import { axe } from 'jest-axe';

import Field from './Field.vue';

describe('<Field />', () => {
  it('renders', async () => {
    const buttonSlot = '<button id="test-button">click</button>';

    const fieldProps = {
      name: 'test',
      label: 'testing',
      type: 'email',
      dataSelector: 'data-address-testing',
      classNames: {
        container: 'test-container',
        input: 'test-input',
        label: 'test-label',
      },
    };

    const slots = {
      default: buttonSlot,
    };

    const { container, baseElement } = render(Field, {
      slots,
      props: fieldProps,
    });

    const div = container.querySelector('div');
    const label = container.querySelector('label');
    const input = container.querySelector('input');
    const button = container.querySelector('#test-button');

    expect(div).toHaveClass('test-container');
    expect(label).toHaveClass('test-label');
    expect(input).toHaveClass('test-input');

    expect(div).toContainElement(label);
    expect(div).toContainElement(button);
    expect(div).toContainElement(input);

    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('id', 'test');
    expect(input).toHaveAttribute('name', 'test');
    expect(label).toHaveAttribute('for', 'test');
    expect(label).toHaveTextContent(/^testing$/i);

    expect(
      await axe(baseElement, {
        rules: {
          region: { enabled: false },
        },
      })
    ).toHaveNoViolations();
  });
});
