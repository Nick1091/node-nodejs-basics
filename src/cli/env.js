export const parseEnv = () => {
    console.log(process.argv.filter((args) => args.includes('RSS_') ).join('; '))
};

parseEnv();
