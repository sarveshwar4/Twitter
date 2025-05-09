export const helper = () => {
    const response = (Math.random() * 10);
    return response % 2 == 0 ? true : false;
}
