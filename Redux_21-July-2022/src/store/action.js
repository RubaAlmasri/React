export const Deposite = (counter) => {
    return { type: "increment", payload: counter }
}

export const Withdraw = (counter) => {
    return { type: "decrement", payload: counter }
}