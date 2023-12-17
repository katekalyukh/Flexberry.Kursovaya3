import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya3',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya3',
          title: 'Kursovaya3'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
