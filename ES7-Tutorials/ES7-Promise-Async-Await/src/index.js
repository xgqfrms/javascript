/* ES7 async & await */
const isMomHappy = true;

// 1nd Promise
const willIGetNewPhone = new Promise((resolve, reject) => {
    if(isMomHappy) {
        const phone = {brand: 'Samsung', color: 'black'};
        resolve(phone);
    }else {
        const reason = new Error(`Mom is not happy!`);
        reject(reason);
    }
});

// 2nd promise
async function showOff(phone) {
    return new Promise((resolve, reject) => {
        let message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone!`;
        resolve(message);
    });
};

// call all promise
async function askMom() {
    try {
        console.log(`before asking Mom `);
        let phone = await willIGetNewPhone;
        let message = await showOff(phone);
        console.log(message);
        console.log(`after asking Mom `);
    }
    catch(error) {
        console.log(error.message);
    }
}

// IIFE
(async () => {
    await askMom();
})();