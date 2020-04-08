const fetch = require("node-fetch");

const get_most_recent = async () => {
    let most_recent_deploys = []
    const response = await fetch("https://gist.githubusercontent.com/gretchenziegler/853c4f709d45176aa44c8e5aee864cac/raw/010a4c44455ffc93b8039935cfc4e0dff41ae502/hcsc.json");
    
    parsed_response = await response.json()

    parsed_response.client_environments.forEach(variant => {
        most_recent_deploys.push(variant.most_recent_deploys['platform-api'].deployed_at)
    })

    return most_recent_deploys
};

get_most_recent().then(response => console.log(response))