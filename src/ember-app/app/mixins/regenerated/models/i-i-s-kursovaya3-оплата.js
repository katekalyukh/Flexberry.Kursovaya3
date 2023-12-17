import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  видОплаты: DS.attr('i-i-s-kursovaya3-тип-оплаты'),
  время: DS.attr('string'),
  дата: DS.attr('date'),
  стоимость: DS.attr('number'),
  печатьФото: DS.belongsTo('i-i-s-kursovaya3-печать-фото', { inverse: null, async: false })
});

export let ValidationRules = {
  видОплаты: {
    descriptionKey: 'models.i-i-s-kursovaya3-оплата.validations.видОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  время: {
    descriptionKey: 'models.i-i-s-kursovaya3-оплата.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya3-оплата.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-kursovaya3-оплата.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  печатьФото: {
    descriptionKey: 'models.i-i-s-kursovaya3-оплата.validations.печатьФото.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОплатаE', 'i-i-s-kursovaya3-оплата', {
    время: attr('Время', { index: 0 }),
    видОплаты: attr('Вид оплаты', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    стоимость: attr('Стоимость', { index: 3 })
  });

  modelClass.defineProjection('ОплатаL', 'i-i-s-kursovaya3-оплата', {
    время: attr('Время', { index: 0 }),
    видОплаты: attr('Вид оплаты', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    стоимость: attr('Стоимость', { index: 3 })
  });
};
