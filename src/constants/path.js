const baseUrl = '/workbench/'
const mockBaseUrl = 'http://result.eolinker.com/1Jr4aJ16d8c8c4e50463a22e4e83dec43f149b2aa735901?uri='
export const HOME = {
 GET_EXCEPTION_LIST: baseUrl+'opdr/taskShow',
 GET_LEADER_AND_GROUP: mockBaseUrl+'getLeaderAndGroup',
 GET_CHARTS_LIST: mockBaseUrl+'getChartsList'
};

export const APP = {

};

export default {
  HOME,
  APP
};
