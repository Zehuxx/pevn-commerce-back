const app = require('./app');
const port = 3000;

app.set('port', process.env.PORT || port);

async function main() {
    await app.listen(app.get('port'), () => {
        console.log(`server listening on port ${port}`);
    });
};

main();