package Kursovaya3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Оператор
 */
@Entity(name = "IISKursovaya3Оператор")
@Table(schema = "public", name = "Оператор")
public class Operator {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "СерияПаспорта")
    private Integer серияпаспорта;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "НомерПаспорта")
    private Integer номерпаспорта;


    public Operator() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getСерияПаспорта() {
      return серияпаспорта;
    }

    public void setСерияПаспорта(Integer серияпаспорта) {
      this.серияпаспорта = серияпаспорта;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public Integer getНомерПаспорта() {
      return номерпаспорта;
    }

    public void setНомерПаспорта(Integer номерпаспорта) {
      this.номерпаспорта = номерпаспорта;
    }


}