import React from 'react';
import { useTodoAppReducer } from '../reducers/todoAppReducer';
import pageInitState from '../initStates/todoAppInitState'

function TodoApp() {
    let [pageState, pageStateDispatch] = useTodoAppReducer(pageInitState);
    return (<>
        <h1>Hello World !!!</h1>
    </>)
}
export default TodoApp