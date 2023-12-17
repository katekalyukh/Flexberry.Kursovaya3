import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya3-печать-чека', 'Unit | Model | i-i-s-kursovaya3-печать-чека', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursovaya3-доп-настройки',
    'model:i-i-s-kursovaya3-настрой-киоска',
    'model:i-i-s-kursovaya3-оператор',
    'model:i-i-s-kursovaya3-оплата',
    'model:i-i-s-kursovaya3-печать-фото',
    'model:i-i-s-kursovaya3-печать-чека',
    'model:i-i-s-kursovaya3-фото-киоск',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
