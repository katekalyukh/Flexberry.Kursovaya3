import { Serializer as НастройКиоскаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya3-настрой-киоска';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(НастройКиоскаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
