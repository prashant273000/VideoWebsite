async function domainFetcher(url){
    const urlobj = new URL(url);
    return await urlobj;
}

const a = await domainFetcher("https://docs.github.com")
console.log(a);