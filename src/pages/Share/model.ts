export default {
  namespace: 'Share',
  state: {
    bodyStatus: null,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    changebodyStatus(state, action) {
      return { ...state, bodyStatus: action.payload };
    },
  },
};
