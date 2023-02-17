window.onload = function () {
    document.querySelectorAll(".counter").forEach(async (counter) => {
        counter.innerText = "0";
        const getCurrentValue = () => parseInt(counter.innerText);
        const targetValue = parseInt(counter.getAttribute("data-target"));
        const step = Math.round(targetValue / 300);
        do {
            await new Promise((resolve) => {
                setTimeout(() => {
                    counter.innerText = getCurrentValue() + step;
                    if (getCurrentValue() >= targetValue)
                        counter.innerText = String(targetValue);
                    resolve();
                }, 50);
            });
        } while (getCurrentValue() < targetValue);
    });
};
