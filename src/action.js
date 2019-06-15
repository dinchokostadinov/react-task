
// asynchronous action creator
export const fetchData = () => {

    return (dispatch) => {
        console.log('ss')
        return fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=uJYvnuyLNJt7h9JlBX7k9xsoHybCE2gF')
            .then(response => response.json())
            .then(json => dispatch(
                { type: "FetchData", data: json }))
            .catch(err => dispatch(
                { type: "ERROR", msg: "Unable to fetch data" }))
    }

}
