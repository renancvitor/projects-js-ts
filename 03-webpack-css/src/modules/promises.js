// Criando recurso para executar em navegadres mais antigos como Internet Explorer

function promose() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hey, I'm the Promise.");
            resolve();
        }, 2000);
    });
}

export default async function () {
    await promise();
    confirm.log('Finish.');
}