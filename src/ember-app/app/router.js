import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya3-настрой-киоска-l');
  this.route('i-i-s-kursovaya3-настрой-киоска-e',
  { path: 'i-i-s-kursovaya3-настрой-киоска-e/:id' });
  this.route('i-i-s-kursovaya3-настрой-киоска-e.new',
  { path: 'i-i-s-kursovaya3-настрой-киоска-e/new' });
  this.route('i-i-s-kursovaya3-оператор-l');
  this.route('i-i-s-kursovaya3-оператор-e',
  { path: 'i-i-s-kursovaya3-оператор-e/:id' });
  this.route('i-i-s-kursovaya3-оператор-e.new',
  { path: 'i-i-s-kursovaya3-оператор-e/new' });
  this.route('i-i-s-kursovaya3-оплата-l');
  this.route('i-i-s-kursovaya3-оплата-e',
  { path: 'i-i-s-kursovaya3-оплата-e/:id' });
  this.route('i-i-s-kursovaya3-оплата-e.new',
  { path: 'i-i-s-kursovaya3-оплата-e/new' });
  this.route('i-i-s-kursovaya3-печать-фото-l');
  this.route('i-i-s-kursovaya3-печать-фото-e',
  { path: 'i-i-s-kursovaya3-печать-фото-e/:id' });
  this.route('i-i-s-kursovaya3-печать-фото-e.new',
  { path: 'i-i-s-kursovaya3-печать-фото-e/new' });
  this.route('i-i-s-kursovaya3-печать-чека-l');
  this.route('i-i-s-kursovaya3-печать-чека-e',
  { path: 'i-i-s-kursovaya3-печать-чека-e/:id' });
  this.route('i-i-s-kursovaya3-печать-чека-e.new',
  { path: 'i-i-s-kursovaya3-печать-чека-e/new' });
  this.route('i-i-s-kursovaya3-фото-киоск-l');
  this.route('i-i-s-kursovaya3-фото-киоск-e',
  { path: 'i-i-s-kursovaya3-фото-киоск-e/:id' });
  this.route('i-i-s-kursovaya3-фото-киоск-e.new',
  { path: 'i-i-s-kursovaya3-фото-киоск-e/new' });
});

export default Router;
