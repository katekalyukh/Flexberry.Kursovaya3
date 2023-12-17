import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПечатьЧекаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya3-печать-чека';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПечатьЧекаMixin, Validations, {
});

defineProjections(Model);

export default Model;
