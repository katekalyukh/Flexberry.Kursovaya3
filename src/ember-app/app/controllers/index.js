import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya3.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya3.title'),
          children: [{
            link: 'i-i-s-kursovaya3-оператор-l',
            caption: i18n.t('forms.application.sitemap.kursovaya3.i-i-s-kursovaya3-оператор-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya3.i-i-s-kursovaya3-оператор-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-kursovaya3-печать-чека-l',
            caption: i18n.t('forms.application.sitemap.kursovaya3.i-i-s-kursovaya3-печать-чека-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya3.i-i-s-kursovaya3-печать-чека-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-kursovaya3-фото-киоск-l',
            caption: i18n.t('forms.application.sitemap.kursovaya3.i-i-s-kursovaya3-фото-киоск-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya3.i-i-s-kursovaya3-фото-киоск-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-kursovaya3-печать-фото-l',
            caption: i18n.t('forms.application.sitemap.kursovaya3.i-i-s-kursovaya3-печать-фото-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya3.i-i-s-kursovaya3-печать-фото-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-kursovaya3-оплата-l',
            caption: i18n.t('forms.application.sitemap.kursovaya3.i-i-s-kursovaya3-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya3.i-i-s-kursovaya3-оплата-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-kursovaya3-настрой-киоска-l',
            caption: i18n.t('forms.application.sitemap.kursovaya3.i-i-s-kursovaya3-настрой-киоска-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya3.i-i-s-kursovaya3-настрой-киоска-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})