export const users = [{ id: 1, name: "Rohan" }, { id: 2, name: "Gaikwad" }];


export const createConnection = (user) => {
    let id;
    const listen = (callBack) => {
        id = setInterval(() => {
            let message = `new Message from ${user.name} at ${new Date().toTimeString()}`
            callBack(message)
        }, 1000);
    }
    const unsubscribe = () => {
        clearInterval(id)
    }
    return { listen, unsubscribe }
}