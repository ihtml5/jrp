export const nativeHasOwn = Object.prototype.toString;
export const isObject = arg => nativeHasOwn.call(arg) === "[object Object]";
export const isFunction = func => typeof func === "function";
export const emptyFunction = () => null;
