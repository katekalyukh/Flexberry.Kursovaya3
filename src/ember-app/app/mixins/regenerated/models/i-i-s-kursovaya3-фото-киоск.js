import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  адрес: DS.attr('string'),
  наименование: DS.attr('string'),
  настройКиоска: DS.belongsTo('i-i-s-kursovaya3-настрой-киоска', { inverse: null, async: false }),
  печатьФото: DS.belongsTo('i-i-s-kursovaya3-печать-фото', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-kursovaya3-фото-киоск.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-kursovaya3-фото-киоск.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-kursovaya3-фото-киоск.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  настройКиоска: {
    descriptionKey: 'models.i-i-s-kursovaya3-фото-киоск.validations.настройКиоска.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  печатьФото: {
    descriptionKey: 'models.i-i-s-kursovaya3-фото-киоск.validations.печатьФото.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГлавноеМенюE', 'i-i-s-kursovaya3-фото-киоск', {
    
  });

  modelClass.defineProjection('ГлавноеМенюL', 'i-i-s-kursovaya3-фото-киоск', {
    
  });

  modelClass.defineProjection('ФотоКиоскE', 'i-i-s-kursovaya3-фото-киоск', {
    
  });

  modelClass.defineProjection('ФотоКиоскL', 'i-i-s-kursovaya3-фото-киоск', {
    
  });
};
