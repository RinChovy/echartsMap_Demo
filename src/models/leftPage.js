import { yearCompStat, monthOfYearStat, payCategoryTop } from 'services';

export default {
  namespace: 'leftPage',

  state: {
    yearCompStatData: [],
    monthOfYearStatData: [],
    payCategoryTopData: [],
  },

  effects: {
    *fetchYearCompStat({ payload }, { call, put }) {
      const { data } = yield call(yearCompStat, payload);
      const {
        code,
        data: { list: yearCompStatData },
      } = data;
      if (code === 0) {
        yield put({
          type: 'setYearCompStat',
          payload: {
            yearCompStatData,
          },
        });
      }
    },
    *fetchMonthOfYearStat({ payload }, { call, put }) {
      const { data } = yield call(monthOfYearStat, payload);
      const {
        code,
        data: { list: monthOfYearStatData },
      } = data;
      if (code === 0) {
        yield put({
          type: 'setMonthOfYearStat',
          payload: {
            monthOfYearStatData,
          },
        });
      }
    },
    *fetchPayCategoryTop({ payload }, { call, put }) {
      const { data } = yield call(payCategoryTop, payload);
      const {
        code,
        data: { list: payCategoryTopData },
      } = data;
      if (code === 0) {
        yield put({
          type: 'setPayCategoryTop',
          payload: {
            payCategoryTopData,
          },
        });
      }
    },
  },

  reducers: {
    setYearCompStat(state, { payload }) {
      return { ...state, ...payload };
    },
    setMonthOfYearStat(state, { payload }) {
      return { ...state, ...payload };
    },
    setPayCategoryTop(state, { payload }) {
      return { ...state, ...payload };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }, action) => {
        if (pathname === '/') {
          dispatch({ type: 'fetchYearCompStat' });
          dispatch({ type: 'fetchMonthOfYearStat' });
          dispatch({ type: 'fetchPayCategoryTop' });
        }
      });
    },
  },
};
