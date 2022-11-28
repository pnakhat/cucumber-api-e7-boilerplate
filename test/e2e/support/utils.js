async function waitForCondition(callback) {
    const maxAttempts = 200;
    let attempt = 0;
    while (attempt < maxAttempts) {
        attempt += 1;
        const condition = await callback();
        if (condition) {
            break;
        }
        await new Promise((resolve) => setTimeout(resolve, 2000));
    }
}

module.exports = {
    waitForCondition,
};
