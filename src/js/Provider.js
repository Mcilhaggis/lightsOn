import React, { createContext, useReducer } from 'react';
export const CountContext = createContext();

export default function CounterProvider(props) {
    const initialState = { count: 0 };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increase1':
                return { count: state.count + 1 };
            case 'increase10':
                return { count: state.count + 10 };
            case 'increase100':
                return { count: state.count + 100 };
            case 'reset':
                return { count: 0 };
            default:
                throw new Error()
        }
    }
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
                {props.children}
            </CountContext.Provider>
        </>
    )
}

