import React from 'react';
import { Button } from '../index';
import { mount } from 'enzyme';
import { felaSnapshot, felaTestContext } from 'cf-style-provider';

test('button renders', () => {
  const snapshot = felaSnapshot(<Button>Hai</Button>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('active button renders', () => {
  const snapshot = felaSnapshot(<Button active>Haiii</Button>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should call onClick function', () => {
  const handleClick = jest.fn();
  const wrapper = mount(
    felaTestContext(<Button onClick={handleClick}>Hit meeeee</Button>)
  );
  expect(handleClick.mock.calls.length).toBe(0);
  wrapper.find(Button).simulate('click');
  expect(handleClick.mock.calls.length).toBe(1);
});
