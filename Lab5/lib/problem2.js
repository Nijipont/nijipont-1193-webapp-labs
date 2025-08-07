
function readInput() {
    let input;
    const list = [];
    while (true) {
        input = parseInt(prompt("Enter an integer (a negetive integer to quit):"));
        if (input < 0) {
            return list;
        }
         if (typeof input !== 'number' || !Number.isInteger(input) || input === 0) {
            continue;
        }
        list.push(input);
    } 
}

function displayStats(list) {
    let min, max, average;
    if (list.length === 0) {
        min = 0;
        max = 0;
        average = 0;
    } else {
        const sum = list.reduce((acc, num) => acc + num, 0);
        min = Math.min(...list);
        max = Math.max(...list);
        average = sum / list.length;
    }

    alert(`For the list ${list}, the average is ${average.toFixed(2)}, the minimum is ${min}, and the maximum is ${max}.`);
}