package Kursovaya3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: ПечатьФото
 */
@Entity(name = "IISKursovaya3ПечатьФото")
@Table(schema = "public", name = "ПечатьФото")
public class PechatFoto {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "РазмерВСм")
    private String размервсм;

    @Column(name = "Носитель")
    private String носитель;

    @Column(name = "Количество")
    private Integer количество;

    @OneToMany(mappedBy = "pechatfoto", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<DopNastrojki> dopnastrojkis;


    public PechatFoto() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getРазмерВСм() {
      return размервсм;
    }

    public void setРазмерВСм(String размервсм) {
      this.размервсм = размервсм;
    }

    public String getНоситель() {
      return носитель;
    }

    public void setНоситель(String носитель) {
      this.носитель = носитель;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }


}