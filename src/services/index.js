import request from 'utils/request';
import { api } from 'config/apiconfig';
import { stringify } from 'qs';

/**
 * 请求仅供参考
 * 合作开发建议 module 拆分
 * @returns Promise
 */
//  年度缴费对比
export async function yearCompStat(params) {
  return request(`${api}/tradeStat/yearCompStat.do`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      sign: 'fc57fc',
    },
    data: stringify(params),
  });
}

//  当年分月收入趋势
export async function monthOfYearStat(params) {
  return request(`${api}/tradeStat/monthOfYearStat.do`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      sign: 'fc57fc',
    },
    data: stringify(params),
  });
}

//右侧渠道年度累计交易占比
export const channelStat = async () => {
  return request(`${api}/tradeStat/channelStat.do`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      sign: 'fc57fc',
    },
  }).then(response => {
    return response.data;
  });
};

//月缴费行业排名
export async function payCategoryTop(params) {
  return request(`${api}/payTop/payCategoryTop.do`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      sign: 'fc57fc',
    },
    data: stringify(params),
  });
}
//月缴费区县前十
export async function areaOfMonthStat(params) {
  return request(`${api}/tradeStat/areaOfMonthStat.do`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      sign: 'fc57fc',
    },
    data: stringify(params),
  });
}
//右侧新进单位
export const merchantTop = async () => {
  return request(`${api}/payTop/merchantTop.do`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      sign: 'fc57fc',
    },
  }).then(response => {
    return response.data;
  });
};

//地图
export const provStat = async () => {
  return request(`${api}/tradeStat/provStat.do`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      sign: 'fc57fc',
    },
  }).then(response => {
    return response.data;
  });
};
// 单位激活率
export async function mercActivateStat(params) {
  return request(`${api}/tradeStat/mercActivateStat.do`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      sign: 'fc57fc',
    },
    data: stringify(params),
  });
}
//行业开票
export async function einvoiceStat(params) {
  return request(`${api}/tradeStat/einvoiceStat.do`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      sign: 'fc57fc',
    },
    data: stringify(params),
  });
}
//行业单位激活
export async function payCategoryActivateStat(params) {
  return request(`${api}/tradeStat/payCategoryActivateStat.do`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      sign: 'fc57fc',
    },
    data: stringify(params),
  });
}
//年度交易总量-(翻牌)
export async function yearTradeStat(params) {
  return request(`${api}/payTop/yearTradeStat.do`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      sign: 'fc57fc',
    },
    data: stringify(params),
  });
}
//月交易环比
export async function monthCircleCompStat(params) {
  return request(`${api}/tradeStat/monthCircleCompStat.do`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      sign: 'fc57fc',
    },
    data: stringify(params),
  });
}
