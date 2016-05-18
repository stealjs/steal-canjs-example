import $ from 'jquery';
import can from 'can';

const AppViewModel = can.Map.extend({
  define: {

    /**
     * By default, viewModel attributes will not be serialized into the URL as
     * route attributes.
     */
    '*': {
      serialize: false
    },

    /**
     * We want the `page` attribute to show in the URL, so `serialize = true`.
     */
    page: {
      serialize: true
    },

    title: {
      value: 'StealJS - CanJS Example App'
    }
  }
});

can.route(':page', {page: 'home'});
can.route.ready();

export default AppViewModel;
