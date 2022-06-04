export const parseEnv = () => {
    console.log(process.argv.filter((args) => args.includes('RSS_') ).join('; '))
};

parseEnv();
// for test bash: RSS_name1=value1 RSS_name2=value2 node src/cli/env
// for test powershell: $env:RSS_name1="value1"; $env:RSS_name2="value2"; node src/cli/env
