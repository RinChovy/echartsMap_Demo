import {
  einvoiceStat,
  payCategoryActivateStat,
  yearTradeStat,
  mercActivateStat,
  provStat,
  monthCircleCompStat,
} from 'services';
export default {
  namespace: 'centerPage',
  state: {
    einvoiceStatData: [],
    payCategoryActivateStatData: [],
    yearTradeStatData: {
      mercCount: 0,
      totalAmt: 0,
      totalCount: 0,
    },
    mercActivateStatData: {
      growth: '0',
      rate: '0',
    },
    MapList: [], //地图数据
    monthCircleCompStatData: [], //月交易环比数据
  },

  effects: {
    *fetchMap({ payload }, { call, put }) {
      const { code, data } = yield call(provStat, payload);
      if (code === 0) {
        yield put({
          type: 'setMap',
          payload: {
            MapList: data.list,
          },
        });
      }
    },
    *fetchEinvoiceStat({ payload }, { call, put }) {
      const { data } = yield call(einvoiceStat, payload);
      const {
        code,
        data: { list: einvoiceStatData },
      } = data;
      if (code === 0) {
        yield put({
          type: 'setEinvoiceStat',
          payload: {
            einvoiceStatData,
          },
        });
      }
    },
    *fetchPayCategoryActivateStat({ payload }, { call, put }) {
      const { data } = yield call(payCategoryActivateStat, payload);
      const {
        code,
        data: { list: payCategoryActivateStatData },
      } = data;
      if (code === 0) {
        yield put({
          type: 'setPayCategoryActivateStat',
          payload: {
            payCategoryActivateStatData,
          },
        });
      }
    },
    *fetchYearTradeStat({ payload }, { call, put }) {
      const { data } = yield call(yearTradeStat, payload);
      const { code, data: yearTradeStatData } = data;
      if (code === 0) {
        yield put({
          type: 'setYearTradeStat',
          payload: {
            yearTradeStatData,
          },
        });
      }
    },
    *fetchMercActivateStat({ payload }, { call, put }) {
      const { data } = yield call(mercActivateStat, payload);
      const { code, data: mercActivateStatData } = data;
      if (code === 0) {
        yield put({
          type: 'setMercActivateStat',
          payload: {
            mercActivateStatData,
          },
        });
      }
    },
    *fetchMonthCircleCompStat({ payload }, { call, put }) {
      const { data } = yield call(monthCircleCompStat, payload);
      const { code, data: monthCircleCompStatData } = data;
      if (code === 0) {
        yield put({
          type: 'setMonthCircleCompStat',
          payload: {
            monthCircleCompStatData,
          },
        });
      }
    },
  },

  reducers: {
    setMap(state, action) {
      return { ...state, ...action.payload };
    },
    setEinvoiceStat(state, { payload }) {
      return { ...state, ...payload };
    },
    setPayCategoryActivateStat(state, { payload }) {
      return { ...state, ...payload };
    },
    setYearTradeStat(state, { payload }) {
      return { ...state, ...payload };
    },
    setMercActivateStat(state, { payload }) {
      return { ...state, ...payload };
    },
    setMonthCircleCompStat(state, { payload }) {
      return { ...state, ...payload };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }, action) => {
        if (pathname === '/') {
          dispatch({ type: 'fetchMap' });
          dispatch({ type: 'fetchEinvoiceStat' });
          dispatch({ type: 'fetchPayCategoryActivateStat' });
          dispatch({ type: 'fetchYearTradeStat' });
          dispatch({ type: 'fetchMonthCircleCompStat' });
          dispatch({ type: 'fetchMercActivateStat' });
        }
      });
    },
  },
};
