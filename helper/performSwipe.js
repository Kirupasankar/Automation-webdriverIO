class PerformSwipe {
    async performSwipe(x1, x2, y1, y2) {
        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: x1, y: y1 },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 100 },
                    { type: 'pointerMove', duration: 1000, x: x2, y: y2 },
                    { type: 'pointerUp', button: 0 },
                ],
            },
        ]);
    }
}
module.exports = new PerformSwipe();