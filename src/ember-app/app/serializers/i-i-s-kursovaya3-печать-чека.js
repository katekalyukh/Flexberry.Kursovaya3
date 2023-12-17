import { Serializer as ПечатьЧекаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya3-печать-чека';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПечатьЧекаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
