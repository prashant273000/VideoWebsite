async function fetchIpAddress(domain){
    const resp = await fetch (
        `https://1.1.1.1/dns-query?name=${domain}&type=A`,
        {
            headers:{
                accept : "application/dns-json"
            },
        },
    );
    const respObject = await resp.json();
    const ip = `This ip ${respObject.Answer[0].data} is of ${respObject.Answer[0].name}`
    return ip;
}
async function test(){
    const ip = await fetchIpAddress("youtube.com")
    console.log(ip);
    return null;
}

test()

export default fetchIpAddress