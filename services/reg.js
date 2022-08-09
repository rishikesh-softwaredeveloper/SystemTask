export const PostReg = async (regdata) => {

    return fetch(`https://apps.apbjpdata.org/services/membership/add`, {
        method: 'post',
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(regdata)
    }).then(Response => Response.json()).
        catch((error) => {    
    })
}