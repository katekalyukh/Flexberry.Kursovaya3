package Kursovaya3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ФотоКиоск
 */
@Entity(name = "IISKursovaya3ФотоКиоск")
@Table(schema = "public", name = "ФотоКиоск")
public class FotoKiosk {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ID")
    private Integer id;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Адрес")
    private String адрес;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "NastrojKioska")
    @Convert("NastrojKioska")
    @Column(name = "НастройКиоска", length = 16, unique = true, nullable = false)
    private UUID _nastrojkioskaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "NastrojKioska", insertable = false, updatable = false)
    private NastrojKioska nastrojkioska;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PechatFoto")
    @Convert("PechatFoto")
    @Column(name = "ПечатьФото", length = 16, unique = true, nullable = false)
    private UUID _pechatfotoid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PechatFoto", insertable = false, updatable = false)
    private PechatFoto pechatfoto;


    public FotoKiosk() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getID() {
      return id;
    }

    public void setID(Integer id) {
      this.id = id;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }


}