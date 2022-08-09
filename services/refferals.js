export const GetRefferals = async (user_id) => {

    return fetch(`https://apps.apbjpdata.org/services/top_refered_members_list?query_type=membership&id=`+ user_id +'', {
        method: 'GET',
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
        }
    }).then(Response => Response.json()).
        catch((error) => {    
    })
}