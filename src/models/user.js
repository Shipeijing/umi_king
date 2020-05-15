import requset from '../services/user';
import { history } from 'umi';
export default {
  namespace: 'UserActive',
  state: {
    status: 0,
    UserData: {
      Uid: null,
      Pwd: null,
    },
  },
  reducers: {
    setStatus(state, { payload }) {
      return { ...state, ...payload };
    },
    setUserData(state, { payload }) {
      return { ...state, ...payload };
    },
    loginOut(state, { payload }) {
      localStorage.clear()
      sessionStorage.clear()
      return {
        ...state,
        status: 0,
        ...payload
      };
    },
    watchUrl(state, { payload }) {
      if (!state.UserData.Uid) {
        history.push('/Login')
      } else {
        //监听路由是否存在，不存在判断是否已经登录，已登录跳转到首页
        if (payload !== '/' && payload !== '/Chat' && payload !== '/Friends' && payload !== '/Share' && payload !== '/User') {
          history.push('/')
        }
      }
      return state
    },
    loginIn(state, { payload }) {
      return {
        ...state,
        status: 0,
        ...payload
      };
    },
  },
  effects: {
    *login({ payload }, { call, put }) {
      const result = yield call(requset.login, payload);
      yield put({
        type: 'loginIn',
        payload: { UserData: result.data },
      });
      if (payload.remember) localStorage.setItem('user', JSON.stringify(result.data))
      else sessionStorage.setItem('user', JSON.stringify(result.data))
      yield history.push('/');
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname !== '/Login' && (localStorage.getItem('user') || sessionStorage.getItem('user'))) {
          dispatch({ type: 'loginIn', payload: { UserData: JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user')) } })
        } else {
          dispatch({ type: 'watchUrl', payload: pathname })
        }
      });
    },
  },
};
