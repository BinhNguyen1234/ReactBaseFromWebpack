function exampleMiddleware (store: any) {
    return function wrapDispatch (next: any) {
        return function handleAction (action: any) {
            // Do anything here: pass the action onwards with next(action),
            // or restart the pipeline with storeAPI.dispatch(action)
            // Can also use storeAPI.getState() here
            console.log(1)
            return next(action)
        }
    }
}
function exampleMiddleware2 (store: any) {
    return function wrapDispatch (next: any) {
        return function handleAction (action: any) {
            // Do anything here: pass the action onwards with next(action),
            // or restart the pipeline with storeAPI.dispatch(action)
            // Can also use storeAPI.getState() here
            console.log(2)
            return next(action)
        }
    }
}
export { exampleMiddleware, exampleMiddleware2 }
