import {
  defineNamespace,
  defineProjections,
  Model as ПечатьЧекаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya3-печать-чека';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПечатьЧекаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
