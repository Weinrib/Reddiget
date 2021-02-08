import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from '../Store/store';

export const renderWithReduxStore = (
    component,
    {
        initialState = {},
        store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(createSagaMiddleware()))),
        ...renderOptions
    } = {}
) => {
    const Wrapper = (props: any) => <Provider store={store}>{props?.children}</Provider>;

    return render(component, { wrapper: Wrapper, ...renderOptions });
};