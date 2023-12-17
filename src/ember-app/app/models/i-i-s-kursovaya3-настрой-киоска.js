import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as НастройКиоскаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya3-настрой-киоска';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(НастройКиоскаMixin, Validations, {
});

defineProjections(Model);

export default Model;
