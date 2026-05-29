import fs from 'fs';

fs.readFile("sample.txt", "utf-8", (err, data) => {
    if (err) return console.error(err)
    console.log(data)
    return data;
})

