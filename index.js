(async () => {
    const PAUSE_BETWEEN = 3 * 1000;
    const PAUSE_MINING = 10 * 1000;

    function clickButton(path) {
        buttonClick = document.querySelector(path);
        if (buttonClick != null) { 
            buttonClick.click(); 
        }
        else {
            console.log('Button not active! -> ' + path);
        }
    }

    while (1) {
        const buttonExecute = "taco-brigade > div > taco-board > div > div.execute-button.shrink-on-hover2";
        const span = document.querySelector("taco-brigade > div > taco-board > div > div.execute-button.shrink-on-hover2 > span");
        if (span.innerText == "EXECUTE") {
            clickButton(buttonExecute);
            await new Promise((res) => setTimeout(res, PAUSE_MINING));
        }
        await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));
    }

})();    