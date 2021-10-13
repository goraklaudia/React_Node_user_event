import React from 'react';
import { create } from 'react-test-renderer';
import UserForm from '../../components/UserForm/UserForm'

describe('Component UserForm', () => {
    it('should render correctly', () => {
        const component = create(<UserForm/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
})