const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports = {
    async taskOne() {
        try {
            await sleep(4000);
            return 'One Value';
        }
        catch (e) {
            console.log(e);
        }
    },

    async taskTwo() {
        try {
            await sleep(2000);
            return 'Two Value';
        }
        catch (e) {

            console.log(e);
        }
    }
}