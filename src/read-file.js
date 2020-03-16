import readData from '../sample_data';

function readFile(){
    try {
        const jsonString = readData();
        return jsonString;
    } catch(err) {
        console.log(err)
        return;
    }
}

export default readFile;
