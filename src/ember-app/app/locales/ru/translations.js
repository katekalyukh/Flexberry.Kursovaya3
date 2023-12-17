import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKursovaya3НастройКиоскаLForm from './forms/i-i-s-kursovaya3-настрой-киоска-l';
import IISKursovaya3ОператорLForm from './forms/i-i-s-kursovaya3-оператор-l';
import IISKursovaya3ОплатаLForm from './forms/i-i-s-kursovaya3-оплата-l';
import IISKursovaya3ПечатьФотоLForm from './forms/i-i-s-kursovaya3-печать-фото-l';
import IISKursovaya3ПечатьЧекаLForm from './forms/i-i-s-kursovaya3-печать-чека-l';
import IISKursovaya3ФотоКиоскLForm from './forms/i-i-s-kursovaya3-фото-киоск-l';
import IISKursovaya3НастройКиоскаEForm from './forms/i-i-s-kursovaya3-настрой-киоска-e';
import IISKursovaya3ОператорEForm from './forms/i-i-s-kursovaya3-оператор-e';
import IISKursovaya3ОплатаEForm from './forms/i-i-s-kursovaya3-оплата-e';
import IISKursovaya3ПечатьФотоEForm from './forms/i-i-s-kursovaya3-печать-фото-e';
import IISKursovaya3ПечатьЧекаEForm from './forms/i-i-s-kursovaya3-печать-чека-e';
import IISKursovaya3ФотоКиоскEForm from './forms/i-i-s-kursovaya3-фото-киоск-e';
import IISKursovaya3ДопНастройкиModel from './models/i-i-s-kursovaya3-доп-настройки';
import IISKursovaya3НастройКиоскаModel from './models/i-i-s-kursovaya3-настрой-киоска';
import IISKursovaya3ОператорModel from './models/i-i-s-kursovaya3-оператор';
import IISKursovaya3ОплатаModel from './models/i-i-s-kursovaya3-оплата';
import IISKursovaya3ПечатьФотоModel from './models/i-i-s-kursovaya3-печать-фото';
import IISKursovaya3ПечатьЧекаModel from './models/i-i-s-kursovaya3-печать-чека';
import IISKursovaya3ФотоКиоскModel from './models/i-i-s-kursovaya3-фото-киоск';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya3-доп-настройки': IISKursovaya3ДопНастройкиModel,
    'i-i-s-kursovaya3-настрой-киоска': IISKursovaya3НастройКиоскаModel,
    'i-i-s-kursovaya3-оператор': IISKursovaya3ОператорModel,
    'i-i-s-kursovaya3-оплата': IISKursovaya3ОплатаModel,
    'i-i-s-kursovaya3-печать-фото': IISKursovaya3ПечатьФотоModel,
    'i-i-s-kursovaya3-печать-чека': IISKursovaya3ПечатьЧекаModel,
    'i-i-s-kursovaya3-фото-киоск': IISKursovaya3ФотоКиоскModel
  },

  'application-name': 'Kursovaya3',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya3',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya3',
          title: 'Kursovaya3'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        kursovaya3: {
          caption: 'Kursovaya3',
          title: 'Kursovaya3',
          'i-i-s-kursovaya3-оператор-l': {
            caption: 'Оператор',
            title: ''
          },
          'i-i-s-kursovaya3-печать-чека-l': {
            caption: 'Печать чека',
            title: ''
          },
          'i-i-s-kursovaya3-фото-киоск-l': {
            caption: 'Фото киоск',
            title: ''
          },
          'i-i-s-kursovaya3-печать-фото-l': {
            caption: 'Печать фото',
            title: ''
          },
          'i-i-s-kursovaya3-оплата-l': {
            caption: 'Оплата',
            title: ''
          },
          'i-i-s-kursovaya3-настрой-киоска-l': {
            caption: 'Настрой киоска',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kursovaya3-настрой-киоска-l': IISKursovaya3НастройКиоскаLForm,
    'i-i-s-kursovaya3-оператор-l': IISKursovaya3ОператорLForm,
    'i-i-s-kursovaya3-оплата-l': IISKursovaya3ОплатаLForm,
    'i-i-s-kursovaya3-печать-фото-l': IISKursovaya3ПечатьФотоLForm,
    'i-i-s-kursovaya3-печать-чека-l': IISKursovaya3ПечатьЧекаLForm,
    'i-i-s-kursovaya3-фото-киоск-l': IISKursovaya3ФотоКиоскLForm,
    'i-i-s-kursovaya3-настрой-киоска-e': IISKursovaya3НастройКиоскаEForm,
    'i-i-s-kursovaya3-оператор-e': IISKursovaya3ОператорEForm,
    'i-i-s-kursovaya3-оплата-e': IISKursovaya3ОплатаEForm,
    'i-i-s-kursovaya3-печать-фото-e': IISKursovaya3ПечатьФотоEForm,
    'i-i-s-kursovaya3-печать-чека-e': IISKursovaya3ПечатьЧекаEForm,
    'i-i-s-kursovaya3-фото-киоск-e': IISKursovaya3ФотоКиоскEForm
  },

});

export default translations;
