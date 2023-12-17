import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  носитель: DS.attr('i-i-s-kursovaya3-вид-носителя'),
  размерВСм: DS.attr('i-i-s-kursovaya3-выбор-размера'),
  допНастройки: DS.hasMany('i-i-s-kursovaya3-доп-настройки', { inverse: 'печатьФото', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-kursovaya3-печать-фото.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  носитель: {
    descriptionKey: 'models.i-i-s-kursovaya3-печать-фото.validations.носитель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  размерВСм: {
    descriptionKey: 'models.i-i-s-kursovaya3-печать-фото.validations.размерВСм.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  допНастройки: {
    descriptionKey: 'models.i-i-s-kursovaya3-печать-фото.validations.допНастройки.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПечатьФотоE', 'i-i-s-kursovaya3-печать-фото', {
    размерВСм: attr('Размер в см', { index: 0 }),
    носитель: attr('Носитель', { index: 1 }),
    количество: attr('Количество', { index: 2 }),
    допНастройки: hasMany('i-i-s-kursovaya3-доп-настройки', 'Доп настройки', {
      кадрирование: attr('Кадрирование', { index: 0 }),
      чБЦвет: attr('Ч б цвет', { index: 1 }),
      уголок: attr('Уголок', { index: 2 })
    })
  });

  modelClass.defineProjection('ПечатьФотоL', 'i-i-s-kursovaya3-печать-фото', {
    размерВСм: attr('Размер в см', { index: 0 }),
    носитель: attr('Носитель', { index: 1 }),
    количество: attr('Количество', { index: 2 })
  });
};
