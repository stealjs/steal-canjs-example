import $ from 'jquery';
import Map from 'can-map';
import route from 'can-route';
import template from './index.stache!';
import 'can-map-define';
import './styles.less!';

const AppViewModel = Map.extend({
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

route('{page}', {page: 'home'});
route.ready();
