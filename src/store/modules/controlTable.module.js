// import Vue from 'vue'; // have to import for Vue.set when need to add new properties and reactivity stuff

import _json from '@/assets/data/mitre-saf-control-mapping.json';

const json = Object.freeze(_json);

const controlsCol = 'NIST SP 800-53 Control';

const state = {
  controlFilters: [],
  profileFilters: [],
  columnFilters: Object.keys(json[0]).filter(col => col !== controlsCol).reduce((acc, cur) => {
    return {
      ...acc,
      [cur]: 0, // 0=all, 1=on, 2=off
    };
  }, {}),
  data: json,
};

const getters = {
  getControls: state => {
    return state.data.map(row => row[controlsCol]);
  },
  getProfiles: state => {
    return Object.keys(state.data[0]).filter(key => ![controlsCol, 'ALL'].includes(key));
  },
  getControlFilters: state => {
    return state.controlFilters;
  },
  getProfileFilters: state => {
    return state.profileFilters;
  },
  getColumnFilters: state => {
    return state.columnFilters;
  },
  getData: state => {
    let data = state.data;

    const controlFilters = getters.getControlFilters(state);
    if(controlFilters.length){
      data = data.filter(row => controlFilters.some(filter => row[controlsCol].toLowerCase().includes(filter.toLowerCase())));
    }

    const colFilters = getters.getColumnFilters(state);
    for(let col of Object.keys(colFilters)) {
      data = data.filter(row => colFilters[col] === 0  || (colFilters[col] === 1 && row[col]) || (colFilters[col] === 2 && !row[col]));
    }

    return data;
  },
  getColumns: state => {
    const filters = getters.getProfileFilters(state);
    let columnheaders = Object.keys(state.data[0]);
    if(filters.length){
      columnheaders = columnheaders.filter(col => [controlsCol, 'ALL'].includes(col) || filters.some(filter => col.toLowerCase().includes(filter.toLowerCase())));
    }

    let columns = [];
    for(let column of columnheaders) {
      columns.push({
        text: column,
        value: column,
        align: 'center',
        type: 'default',
        field: (rec) => rec[column] ? 'InSpec' : '',
        checkmark: ['☒', '☑', '☐'][getters.getColumnFilters(state)[column] ?? 0],
        checkmarkFont: '30px sans-serif',
      });
    }

    let controlNames = undefined;
    if((controlNames = columns.find(col => col.value === controlsCol))) {
      controlNames.align = 'start';
      controlNames.field = (rec) => rec[controlNames.value];
      controlNames.checkmark = 'RESET';
      controlNames.checkmarkFont = '16px sans-serif';
      controlNames.width = 100;
    }
    let all = undefined;
    if((all = columns.find(col => col.value === 'ALL'))) {
      all.text = 'Total Assessment Range';
      all.type = 'check';
      all.field = (rec) => rec[all.value];
      all.width = 100;
    }
    let heimdall = undefined;
    if((heimdall = columns.find(col => col.value === 'CWE tool data mapped by Heimdall_tools'))) {
      heimdall.field = (rec) => rec[heimdall.value] ? 'SonarQ, Fortify, ZAP, Burp' : '';
      heimdall.width = 200;
    }

    return columns;
  }
};

const mutations = {
  setControlFilters(state, filters) {
    state.controlFilters = filters;
  },
  setProfileFilters(state, filters) {
    state.profileFilters = filters;
  },
  updateColumnFilters(state, column) {
    if(column === controlsCol) {
      for(let col of Object.keys(state.columnFilters)) {
        state.columnFilters[col] = 0;
      }
    } else {
      state.columnFilters[column] = (state.columnFilters[column]+1)%3;
    }
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
