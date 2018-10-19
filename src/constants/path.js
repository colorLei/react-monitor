const baseUrl = '/workbench/'
const bbUrl = 'http://result.eolinker.com/1Jr4aJ16d8c8c4e50463a22e4e83dec43f149b2aa735901?uri='
// const betaUrl = 'http://result.eolinker.com/1Jr4aJ16d8c8c4e50463a22e4e83dec43f149b2aa735901?uri='
// const betaUrl =  '/amountskyruler/amountskyruler/';
const betaUrl =  '/amountskyruler/amountskyruler/';

export const HOME = {
 GET_EXCEPTION_LIST: bbUrl+'opdr/taskShow',
 GET_LEADER_AND_GROUP: betaUrl+'getLeaderAndGroup',
 GET_CHARTS_LIST: betaUrl+'getHomeChartData'
};

export const DETAIL = {
  GET_LEVELONE_LIST:betaUrl+'showAllType',
  GET_LEVELTWO_LIST:betaUrl+'showAllType',
  GET_LEVELTHREE_LIST:betaUrl+'showAllType',
  SET_DETAIL_PAGE_ACTIVE:false,
  CLEAR_LEVELTHREE_LIST:false,
  GET_HOURS_LIST:betaUrl+'showDataDetail',
  GET_TENDENCY_DETAIL:betaUrl+'showDataDetail',
  GET_LEVEL_NAME:betaUrl+'getLevelName'
};

export default {
  HOME,
  DETAIL
};
