const data = {
    slack_name : '',
    current_day : '',
    utc_time : '',
    track : '',
    github_file_url:'https://github.com/Ezedike-Evan/HNG_backend_projects/blob/stage-1/server.js',
    github_repo_url: 'https://github.com/Ezedike-Evan/HNG_backend_projects/tree/stage-1',
    status_code : 200
}

const dayOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

const Api = (req , res)=>{
    const currentDate = new Date()
    data.slack_name = req.query.slack_name
    data.current_day = dayOfWeek[currentDate.getUTCDay()]
    data.utc_time = currentDate.toISOString().slice(0 , 19) + 'z'
    data.track = req.query.track

    res.json(data)
}

module.exports = {Api}
