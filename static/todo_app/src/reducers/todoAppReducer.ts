import { IAction } from "../typeDefs/action";
import { ITodoAppState } from "../typeDefs/todoAppState";
import { useCallback, useReducer } from "react";

export const useTodoAppReducer = (initState: ITodoAppState): [ITodoAppState, React.Dispatch<IAction>] => {
    // create the reducer function
    const reducer = (state: ITodoAppState, action: IAction): ITodoAppState => {
        switch (action.type) {
            default:
                console.log("unwanted action detected");
                console.log(JSON.stringify(action));
                //throw new Error();
                return state;
            // return state also works
        }
    }
    // create the reducer hook
    let [pageState, pageStateDispatch]: [ITodoAppState, React.Dispatch<IAction>] = useReducer(reducer, initState)

    // created middleware to intercept dispatch calls that require async operations
    const asyncDispatch: React.Dispatch<IAction> = useCallback(async (action) => {
        switch (action.type) {
            default:
                pageStateDispatch(action);
        }
    }, []);
    return [pageState, asyncDispatch];
}