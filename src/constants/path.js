const baseUrl = '/workbench/'
const mockBaseUrl = 'http://result.eolinker.com/1Jr4aJ16d8c8c4e50463a22e4e83dec43f149b2aa735901?uri='

export const HOME = {
 GET_EXCEPTION_LIST: baseUrl+'opdr/taskShow',
 GET_LEADER_AND_GROUP: mockBaseUrl+'getLeaderAndGroup',
 GET_CHARTS_LIST: mockBaseUrl+'getChartsList'
};

export const DETAIL = {
  GET_LEVELONE_LIST:mockBaseUrl+'getLevelOne',
  GET_LEVELTWO_LIST:mockBaseUrl+'getLevelTwo',
  GET_LEVELTHREE_LIST:mockBaseUrl+'getLevelThree',
  SET_LEVELS_DATA:false,
  GET_HOURS_LIST:mockBaseUrl+'getHoursList'
};

export default {
  HOME,
  DETAIL
};
