
import React from 'react';
import { store } from './store/store';

import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import './styles.css'



const CalendarApp = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>

    )
}

export default CalendarApp
