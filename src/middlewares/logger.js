
export const logger = store => next => action => {
    console.group(action.type);
    console.log('Action', action);
    let result = next(action);
    console.log('After', store.getState());
    console.groupEnd();
    return result;
}