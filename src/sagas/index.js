import { all, takeLatest } from 'redux-saga/effects'
import API from 'services/api'

import { Types as SoundscapeTypes } from 'reducers/soundscape'

import { fetchSoundscapesRequest } from 'sagas/soundscapeSagas'

export default function * root (dispatch) {
  const api = API.create(dispatch)

  yield all([
    takeLatest(SoundscapeTypes.FETCH_SOUNDSCAPES_REQUEST, fetchSoundscapesRequest, api)
  ])
}
