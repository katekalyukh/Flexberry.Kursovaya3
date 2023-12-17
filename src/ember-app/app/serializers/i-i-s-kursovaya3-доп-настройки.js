import { Serializer as ДопНастройкиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya3-доп-настройки';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДопНастройкиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
