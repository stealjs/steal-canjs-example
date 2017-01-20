import $ from 'jquery';
import can from 'can';
import template from './index.stache!';
import './styles.less!';

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
    }
  }
});

var data = new AppViewModel({});
$('body').append(template(data));

can.route(':page', {page: 'home'});
can.route.ready();
