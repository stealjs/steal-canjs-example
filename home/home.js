import can from 'can';
import template from './home.stache';

can.Component.extend({
  tag: 'home-page',
  template,
  viewModel: {
    define: {
      greeting: {
        value: 'Welcome to your new CanJS App!'
      }
    }
  }
});
