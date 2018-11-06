const fs = require('fs');

function message(req, res) {
    const msg = [];

    req.on('data', data => {
       msg.push(data);
    });

    req.on('end', () => {
        const parsedMsg = Buffer.concat(msg).toString();
        const message = parsedMsg.split('=')[1];
        const msgBody = JSON.stringify({
            message: message.split('+').join(' ')
        });

        fs.writeFile('secretMessage.json', msgBody, (error) => {
            if (error) {
                console.log(error);
            }
        });
    });

    res.redirect('/contact');
}

module.exports = message;
