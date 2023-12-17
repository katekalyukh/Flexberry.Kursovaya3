import {
  defineNamespace,
  defineProjections,
  Model as ФотоКиоскMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya3-фото-киоск';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ФотоКиоскMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
