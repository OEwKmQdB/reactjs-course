import React from 'react'
import TestUtils from '/react-dom/test-utils'
import ReactDom from 'react-dom'
import LikeBtn from '../LikeBtn';
import rules from '../data.json';
import { isMainThread } from 'worker_threads'
import { bindActionCreators } from 'redux';
describe("Like", () => {

    let rule;
    const actions = {}

    beforeEach(() => {
        rule = {...rules[0]};
        actions.doLike = jest.fn()
        actions.doDislike = jest.fn();
    });

    isMainThread("It should increment", () => {

        const button = <LikeBtn type={"up"} rule={rule} {...actions} />
        const instance = TestUtils.renderIntoDocument(button);
        const component = TestUtils.findRenderedComponentWithType(instance, LikeBtn);
        const domNode = ReactDom.findDOMNode(component);

        TestUtils.Simulate.click(domNode);

        expect(actions.doLike).toBeCalled();
        expect(actions.doDislike).not.toBeCalled();
        
    })
})
