import { channelStat, merchantTop, areaOfMonthStat } from 'services';

export default {
  namespace: 'rightPage',

  state: {
    transactionsOfChannels_one: [], //渠道年度累计交易占比第一数据
    transactionsOfChannels_two: [], //渠道年度累计交易占比第二数据
    NewMerchantList: [], //新进商户
    areaOfMonthStatData: [],
  },

  effects: {
    //渠道年度累计交易占比
    *fetchTransactions({ payload }, { call, put }) {
      const { code, data } = yield call(channelStat, payload);
      if (code === 0) {
        let listO = [];
        let listT = [];
        data.list.forEach((v, k) => {
          listO.push(v.type);
          listT.push({ name: v.type, value: v.remark, value2: v.money });
          listT.reverse();
        });
        yield put({
          type: 'setTransactions',
          payload: {
            transactionsOfChannels_one: listO,
            transactionsOfChannels_two: listT,
          },
        });
      }
    },
    *fetchNewMerchant({ payload }, { call, put }) {
      const { code, data } = yield call(merchantTop, payload);
      if (code === 0) {
        yield put({
          type: 'setNewMerchant',
          payload: {
            NewMerchantList: data.list,
          },
        });
      }
    },
    *fetchAreaOfMonthStat({ payload }, { call, put }) {
      const { data } = yield call(areaOfMonthStat, payload);
      const {
        code,
        data: { list: areaOfMonthStatData },
      } = data;
      if (code === 0) {
        yield put({
          type: 'setAreaOfMonthStat',
          payload: {
            areaOfMonthStatData,
          },
        });
      }
    },
  },

  reducers: {
    setTransactions(state, { payload }) {
      return { ...state, ...payload };
    },
    setNewMerchant(state, { payload }) {
      return { ...state, ...payload };
    },
    setAreaOfMonthStat(state, { payload }) {
      return { ...state, ...payload };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }, action) => {
        if (pathname === '/') {
          dispatch({ type: 'fetchTransactions' });
          dispatch({ type: 'fetchNewMerchant' });
          dispatch({ type: 'fetchAreaOfMonthStat' });
        }
      });
    },
  },
};
