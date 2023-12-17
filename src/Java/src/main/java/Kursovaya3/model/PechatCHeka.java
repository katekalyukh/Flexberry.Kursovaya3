package Kursovaya3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ПечатьЧека
 */
@Entity(name = "IISKursovaya3ПечатьЧека")
@Table(schema = "public", name = "ПечатьЧека")
public class PechatCHeka {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ИннОрг")
    private Integer иннорг;

    @Column(name = "Компания")
    private String компания;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PechatFoto")
    @Convert("PechatFoto")
    @Column(name = "ПечатьФото", length = 16, unique = true, nullable = false)
    private UUID _pechatfotoid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PechatFoto", insertable = false, updatable = false)
    private PechatFoto pechatfoto;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Oplata")
    @Convert("Oplata")
    @Column(name = "Оплата", length = 16, unique = true, nullable = false)
    private UUID _oplataid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Oplata", insertable = false, updatable = false)
    private Oplata oplata;


    public PechatCHeka() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getИннОрг() {
      return иннорг;
    }

    public void setИннОрг(Integer иннорг) {
      this.иннорг = иннорг;
    }

    public String getКомпания() {
      return компания;
    }

    public void setКомпания(String компания) {
      this.компания = компания;
    }


}