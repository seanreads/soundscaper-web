import { call, put } from 'redux-saga/effects'
import SoundscapeActions from 'reducers/soundscape'

export function* fetchSoundscapesRequest (api) {
  const response = yield call(api.fetchSoundscapesRequest)
  if (response.ok) {
    const soundscapes = response.data
    yield put(SoundscapeActions.fetchSoundscapesSuccess(soundscapes))
  } else {
    yield put(SoundscapeActions.fetchSoundscapesFailure())
  }
}
