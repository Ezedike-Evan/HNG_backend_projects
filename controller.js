const data = {
    slack_name : '',
    current_day : '',
    utc_time : '',
    track : '',
    github_file_url:'www.kissmyass.com',
    github_repo_url: 'www.suckmydick.com',
    status_code : 200
}

const dayOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

const Api = (req , res)=>{
    const currentDate = new Date()
    data.slack_name = req.query.slack_name
    data.current_day = dayOfWeek[currentDate.getUTCDay()]
    data.utc_time = currentDate.toISOString().slice(0 , 19) + 'z'
    data.track = req.query.track

    res.setHeader('Content-Type','application/json')
    res.json(data)
}

module.exports = {Api}