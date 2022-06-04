export const parseArgs = () => {
    const newArr = process.argv.slice(2).map(( it, idx) =>  !(idx % 2 === 0) ? `is${it}${idx !==process.argv.length -3 && ',' }` :  it.slice(2, it.length));
    console.log(...newArr);
};

parseArgs();
