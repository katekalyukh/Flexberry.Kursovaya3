import {
  defineNamespace,
  defineProjections,
  Model as ПечатьФотоMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya3-печать-фото';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПечатьФотоMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
