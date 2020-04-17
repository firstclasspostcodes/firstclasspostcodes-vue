import { render, fireEvent } from '@testing-library/vue';

import PostcodeLookup from './PostcodeLookup.vue';

describe('<PostcodeLookup />', () => {
  let getPostcode;

  let client;

  beforeEach(() => {
    getPostcode = jest.fn();
    client = { getPostcode };
  });

  it('handles entering addresses', async () => {
    const data = function() {
      return { client };
    };

    const slots = {
      address: `<input type="text" data-address-line1 />`,
    };

    const props = {
      classNames: {
        input: {
          input: 'test-input',
          button: 'test-button',
        },
      },
    };

    const testAddress = [['ID:0', 'TESTING']];

    const formatAddress = jest.fn(() => ({
      address: '1 test lane',
    }));

    getPostcode.mockImplementationOnce(() => ({
      formatAddress,
      listAddresses: () => testAddress,
    }));

    const { container } = render(PostcodeLookup, { props, data, slots });

    const input = container.querySelector('.test-input');
    const button = container.querySelector('.test-button');

    await fireEvent.update(input, 'test');
    await fireEvent.click(button);

    expect(getPostcode).toHaveBeenCalledWith('test');

    const select = container.querySelector('select');

    await fireEvent.change(select, { target: { value: testAddress[0][0] } });

    expect(formatAddress).toHaveBeenCalledWith(testAddress[0][0]);

    const addressLine1Input = container.querySelector('[data-address-line1]');

    expect(addressLine1Input).toHaveValue('1 test lane');
  });
});
