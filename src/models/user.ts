import request from '../utils/request'
import api from '../utils/api'
import { history } from 'umi';
export default  {
        namespace: 'UserActive',
        state: {
            status: null,
            UserData: {
                Uid: null,
                Pwd: null
            }
        },
        reducers: {
            setStatus(state, action) {
                return { ...state, status: action.payload };
            },
            setUserData(state, action) {
                return {
                    ...state, UserData: action.payload
                };
            },
            loginOut(state, action) {
                return {
                    ...state, status: 0, UserData: {
                        Uid: null,
                        Pwd: null
                    }
                };
            },
            loginIn(state, action) {
                console.log(action.payload)
                return {
                    ...state, status: 0, UserData: action.payload
                };
            }
        },
        effects: {
            *login(action, { call, put }) {
                const result = yield call(request, [api.login, 'POST', action.payload])
                yield put({ type: 'loginIn', payload: result.data })
                yield history.push('/')
            },
        },
        subscriptions: {
            setup({ dispatch, history }) {
                history.listen((pathname) => {
                    if (pathname.pathname === '/Login') {
                        dispatch({ type: 'setStatus', payload: 0 })
                    } else {
                        dispatch({ type: 'setStatus', payload: null })
                    }

                })
            }
        },
}