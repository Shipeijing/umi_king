export default {
  namespace: 'Index',
  state: {
    visible: false,
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
    setVisible(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
