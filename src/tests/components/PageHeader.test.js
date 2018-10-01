import React from 'react';
import {shallow} from 'enzyme';
import PageHeader from '../../components/PageHeader';

test('Should render header', ()=>{
    const wrapper = shallow(<PageHeader/>)
    expect(wrapper).toMatchSnapshot()

    
})
