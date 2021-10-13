import React from 'react';
import { act, create } from 'react-test-renderer';
import { Field } from '../../components/UserForm/Field'

describe('Component Field', () => {
    let component = {};
    let setValue = {};

    beforeAll(() => {
        setValue = jest.fn();
        component = create(
            <Field key={'text'}
            id={'text'}
            label={'test'}
            type={'text'}
            value={'text'}
            setValue={setValue}
            error={{value: false, text: ''}}/>
        );
    });

    it('should render correctly', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should update content of the controller correctly', () => {
        act(() => {
            component.update(
                <Field key={'text'}
                id={'text'}
                label={'test'}
                type={'text'}
                value={'test'}
                setValue={setValue}
                error={{value: true, text: 'Error'}}/>
            );
        })

        expect(component.toJSON()).toMatchSnapshot();
    });
})