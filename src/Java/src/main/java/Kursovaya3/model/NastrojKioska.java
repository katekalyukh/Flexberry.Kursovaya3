package Kursovaya3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: НастройКиоска
 */
@Entity(name = "IISKursovaya3НастройКиоска")
@Table(schema = "public", name = "НастройКиоска")
public class NastrojKioska {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НаличиеБумаги")
    private Boolean наличиебумаги;

    @Column(name = "ЗаправКартр")
    private Boolean заправкартр;

    @Column(name = "ДатаНастройки")
    private Date датанастройки;

    @Column(name = "ВремяНастройки")
    private String времянастройки;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Operator")
    @Convert("Operator")
    @Column(name = "Оператор", length = 16, unique = true, nullable = false)
    private UUID _operatorid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Operator", insertable = false, updatable = false)
    private Operator operator;


    public NastrojKioska() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Boolean getНаличиеБумаги() {
      return наличиебумаги;
    }

    public void setНаличиеБумаги(Boolean наличиебумаги) {
      this.наличиебумаги = наличиебумаги;
    }

    public Boolean getЗаправКартр() {
      return заправкартр;
    }

    public void setЗаправКартр(Boolean заправкартр) {
      this.заправкартр = заправкартр;
    }

    public Date getДатаНастройки() {
      return датанастройки;
    }

    public void setДатаНастройки(Date датанастройки) {
      this.датанастройки = датанастройки;
    }

    public String getВремяНастройки() {
      return времянастройки;
    }

    public void setВремяНастройки(String времянастройки) {
      this.времянастройки = времянастройки;
    }


}