export default {
  namespace: 'Chat',
  state: {
    navStatus: false,
  },

  reducers: {
    //
    changenavStatus(state, action) {
      console.log(action);
      return { ...state, navStatus: action.payload };
    },
  },
  subscriptions: {
    //订阅
    setup({ dispatch, history }) {},
  },

  effects: {
    //异步
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      yield put({ type: 'save' });
    },
  },
};
