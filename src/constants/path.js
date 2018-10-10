const baseUrl = '/workbench/'
const mockBaseUrl = 'http://result.eolinker.com/1Jr4aJ16d8c8c4e50463a22e4e83dec43f149b2aa735901?uri='
const betaUrl = '/amountskyruler/';

export const HOME = {
 GET_EXCEPTION_LIST: 'opdr/taskShow',
 GET_LEADER_AND_GROUP: betaUrl+'getLeaderAndGroup',
 GET_CHARTS_LIST: betaUrl+'getHomeChartData'
};

export const DETAIL = {
  GET_LEVELONE_LIST:betaUrl+'showAllType',
  GET_LEVELTWO_LIST:betaUrl+'showAllType',
  GET_LEVELTHREE_LIST:betaUrl+'showAllType',
  SET_LEVELS_DATA:false,
  CLEAR_LEVELTHREE_LIST:false,
  GET_HOURS_LIST:betaUrl+'showDataDetail',
  GET_TENDENCY_DETAIL:mockBaseUrl+'getTendencyDetail'
};

export default {
  HOME,
  DETAIL
};
