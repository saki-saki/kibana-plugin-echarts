import visTypes from 'ui/registry/vis_types';
define(function (require) {
  // visTypes.register(require('plugins/kibana-plugin-echarts/echarts_pie'));
  // visTypes.register(require('plugins/kibana-plugin-echarts/echarts_line'));
  visTypes.register(require('plugins/kibana-plugin-echarts/echarts_bar'));
  visTypes.register(require('plugins/kibana-plugin-echarts/echarts_map'));
});
