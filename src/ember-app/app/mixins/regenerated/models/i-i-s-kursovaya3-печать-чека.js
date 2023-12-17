import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  иннОрг: DS.attr('number'),
  компания: DS.attr('string'),
  оплата: DS.belongsTo('i-i-s-kursovaya3-оплата', { inverse: null, async: false }),
  печатьФото: DS.belongsTo('i-i-s-kursovaya3-печать-фото', { inverse: null, async: false })
});

export let ValidationRules = {
  иннОрг: {
    descriptionKey: 'models.i-i-s-kursovaya3-печать-чека.validations.иннОрг.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  компания: {
    descriptionKey: 'models.i-i-s-kursovaya3-печать-чека.validations.компания.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оплата: {
    descriptionKey: 'models.i-i-s-kursovaya3-печать-чека.validations.оплата.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  печатьФото: {
    descriptionKey: 'models.i-i-s-kursovaya3-печать-чека.validations.печатьФото.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПечатьЧекаE', 'i-i-s-kursovaya3-печать-чека', {
    иннОрг: attr('Инн орг', { index: 0 }),
    компания: attr('Компания', { index: 1 })
  });

  modelClass.defineProjection('ПечатьЧекаL', 'i-i-s-kursovaya3-печать-чека', {
    иннОрг: attr('Инн орг', { index: 0 }),
    компания: attr('Компания', { index: 1 })
  });
};
