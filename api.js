const client_id = '62331';
const client_secret = '04bac98ab022c5b25abe100859e46b7383a8d2bc';
const grant_type = 'authorization_code'

const redirect_uri = 'http://localhost:8080'

export const getCode = () => {
    let URl = `http://www.strava.com/oauth/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}/exchange_token&approval_prompt=force&&scope=activity:read_all`
    window.location = URl
}

export const getToken = (code) => {
    let data = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': 'POST, GET'
        }
    }
    let URL = `https://www.strava.com/oauth/token?client_id=${client_id}&client_secret=${client_secret}&code=${code}&grant_type=${grant_type}`
    return fetch(URL, data).then((res) => res.json());
}

export const refreshToken =(refresh_token) => {
    let grant_type = 'refresh_token'
    let data = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': 'POST, GET'
        }
    }
    let URL = `https://www.strava.com/api/v3/oauth/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=${grant_type}&refresh_token=${refresh_token}`
    return fetch(URL, data).then((res) => res.json());
}

export const getAthlete = (access_token) => {
    let data = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': 'POST, GET',
            'Authorization': `Bearer ${access_token}`
        }
    }
    let URL = 'https://www.strava.com/api/v3/athlete';
    return fetch(URL, data).then((res) => res.json());
}
export const getActivities = (access_token, before, after) => {
    let data = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': 'POST, GET',
            'Authorization': `Bearer ${access_token}`
        }
    }
    let URL = `https://www.strava.com/api/v3/athlete/activities?before=${before}&after=${after}&per_page=30`
    return fetch(URL, data).then((res) => res.json());
}
