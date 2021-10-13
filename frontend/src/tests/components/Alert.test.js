import React from 'react';
import { act, create } from 'react-test-renderer';
import Alert from '../../components/Alert/Alert';
import { messages } from '../../utils/constants';

describe('Component Alert', () => {
    let alertComponent = {};
    let setOpen;

    beforeAll(() => {
        setOpen = jest.fn();
        alertComponent = create(<Alert msg={messages.USER_ADDED} open={false} setOpen={setOpen} />);
    });

    it('should render correctly', () => {
        expect(alertComponent.toJSON()).toMatchSnapshot();
    });

    it('should update content of the message correctly', () => {
        act(() => {
            alertComponent.update(<Alert msg={'Error'} open={false} setOpen={setOpen} />);
        })

        expect(alertComponent.toJSON()).toMatchSnapshot();
    });
})