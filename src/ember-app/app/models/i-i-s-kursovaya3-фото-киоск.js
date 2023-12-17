import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ФотоКиоскMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya3-фото-киоск';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ФотоКиоскMixin, Validations, {
});

defineProjections(Model);

export default Model;
