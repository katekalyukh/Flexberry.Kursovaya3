import {
  defineNamespace,
  defineProjections,
  Model as НастройКиоскаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya3-настрой-киоска';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НастройКиоскаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
