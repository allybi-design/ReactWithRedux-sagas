import {takeEvery, put} from "redux-saga/effects"

function* ageUpAsync() {
    yield put({type: "AGE_UP_ASYNC", value: 1})
}

function* ageDownAsync() {
    yield put({type: "AGE_DOWN_ASYNC", value: 1})
}

function * showModal() {
    yield put({type: "TOGGLE_MODAL"})
}


export function* watchAgeUp() {
    yield takeEvery("AGE_UP", ageUpAsync)
}

export function* watchAgeDown() {
    yield takeEvery("AGE_DOWN", ageDownAsync)
}

export function* watchToggle() {
    yield takeEvery("SHOW_MODAL", showModal)
}