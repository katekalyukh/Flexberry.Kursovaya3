import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya3-печать-фото', 'Unit | Serializer | i-i-s-kursovaya3-печать-фото', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya3-печать-фото',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya3-вид-носителя',
    'transform:i-i-s-kursovaya3-выбор-размера',
    'transform:i-i-s-kursovaya3-тип-оплаты',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
