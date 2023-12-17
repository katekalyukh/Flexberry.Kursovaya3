import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяНастройки: DS.attr('string'),
  датаНастройки: DS.attr('date'),
  заправКартр: DS.attr('boolean'),
  наличиеБумаги: DS.attr('boolean'),
  оператор: DS.belongsTo('i-i-s-kursovaya3-оператор', { inverse: null, async: false })
});

export let ValidationRules = {
  времяНастройки: {
    descriptionKey: 'models.i-i-s-kursovaya3-настрой-киоска.validations.времяНастройки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаНастройки: {
    descriptionKey: 'models.i-i-s-kursovaya3-настрой-киоска.validations.датаНастройки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  заправКартр: {
    descriptionKey: 'models.i-i-s-kursovaya3-настрой-киоска.validations.заправКартр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наличиеБумаги: {
    descriptionKey: 'models.i-i-s-kursovaya3-настрой-киоска.validations.наличиеБумаги.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оператор: {
    descriptionKey: 'models.i-i-s-kursovaya3-настрой-киоска.validations.оператор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НастройКиоскаE', 'i-i-s-kursovaya3-настрой-киоска', {
    наличиеБумаги: attr('Наличие бумаги', { index: 0 }),
    заправКартр: attr('Заправ картр', { index: 1 }),
    датаНастройки: attr('Дата настройки', { index: 2 }),
    времяНастройки: attr('Время настройки', { index: 3 })
  });

  modelClass.defineProjection('НастройКиоскаL', 'i-i-s-kursovaya3-настрой-киоска', {
    наличиеБумаги: attr('Наличие бумаги', { index: 0 }),
    заправКартр: attr('Заправ картр', { index: 1 }),
    датаНастройки: attr('Дата настройки', { index: 2 }),
    времяНастройки: attr('Время настройки', { index: 3 })
  });
};
