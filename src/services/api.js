import apisauce from 'apisauce'

const defaultHost = process.env.SOUNDSCAPER_API || ''

const create = (dispatch, host = defaultHost) => {
    const api = apisauce.create({
        baseURL: `${host}/api/v1`
    })
}
