/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package de.pottmeier.model;

import java.util.Date;

/**
 *
 * @author ludger
 */
public class TerminDto implements Termin {
  private Long id;
    private Date termin ;
    private String ort;
   private String  anlass;

    

    @Override
    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public Long getId() {
        return id;
    }
    

    @Override
    public Date getTermin() {
        return termin;
    }

    @Override
    public void setTermin(Date termin) {
        this.termin = termin;
    }

    @Override
    public String getOrt() {
        return ort;
    }

    @Override
    public void setOrt(String ort) {
        this.ort = ort;
    }

    @Override
    public String getAnlass() {
        return anlass;
    }

    @Override
    public void setAnlass(String anlass) {
        this.anlass = anlass;
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 97 * hash + (int) (this.id ^ (this.id >>> 32));
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final TerminDto other = (TerminDto) obj;
        if (this.id != other.id) {
            return false;
        }
        return true;
    }
    
    
}
