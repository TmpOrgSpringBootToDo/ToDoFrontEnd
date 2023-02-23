import Axios from "axios";

const get = (url, callback) => {
    Axios.get(url)
        .then(res => {
            console.log(JSON.stringify(res.data))
            callback(null, res)
        })
        .catch(err => {
            console.error(err)
            callback(err, null)
        })
}

const post = (url, data, callback) => {
    Axios.post(url, data)
        .then(res => {
            console.log(`Response: ${JSON.stringify(res)}`)
            callback(null, res)
        })
        .catch(err => {
            console.error(err);
            callback(err, null)
        })
}

const destroy = (url, callback) => {
    Axios.delete(url)
        .then(res => {
            console.log(`Deleted`)
            callback(null, "Deleted")
        })
        .catch(err => {
            console.error(err);
            callback(err, null)
        })
}

export { get, post, destroy };