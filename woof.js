function woof(str) {
    console.log("the woof ran: " + str);
    if(typeof str !== 'string'){
        throw Error('MUST BE A STRING')
        return null;
    }
    return str.length + 'woof!';
}

module.exports = woof;