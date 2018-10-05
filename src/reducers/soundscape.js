import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  fetchSoundscapes: [],
  fetchSoundscapesFailure: null,
  fetchSoundscapesSuccess: ['soundscapes']
})
export { Types }
export default Creators

export const INITIAL_STATE = Immutable({
  error: null,
  fetching: false
})

export const fetchSoundscapes = (state) => state.merge({ error: null, fetching: true })
export const fetchSoundscapesFailure = (state, { error }) => state.merge({ error: error, fetching: false })
export const fetchSoundscapesSuccess = (state, { soundcapes }) => {
  return state.merge({ fetching: false, soundcapes: soundscapes })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_SOUNDSCAPES]: fetchSoundscapes,
  [Types.FETCH_SOUNDSCAPES_FAILURE]: fetchSoundscapesFailure,
  [Types.FETCH_SOUNDSCAPES_SUCCESS]: fetchSoundscapesSuccess
})
