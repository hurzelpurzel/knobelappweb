/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package de.pottmeier.beans;

import de.pottmeier.model.Termin;
import de.pottmeier.model.TerminDto;
import de.pottmeier.model.TerminPO;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.atomic.AtomicLong;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;

/**
 *
 * @author ludger
 */
@Repository
public class TerminRepository {
    
    private static final String PERSISTENCE_UNIT_NAME = "knobelapp_pu";
    private final AtomicLong sequence = new AtomicLong();
     
    
    private Set<TerminDto> content = new HashSet<TerminDto>();
    
    
    @PersistenceContext(unitName = PERSISTENCE_UNIT_NAME)
    EntityManager em;
    
    public long create(TerminDto in) {
        long id =sequence.incrementAndGet();
        in.setId(id);
        this.content.add(in);
        return id;
        
    }
    
     public boolean change(TerminDto in){
         if(this.content.contains(in)){
             this.content.remove(in);
             this.content.add(in);
             return true;
         }
         return false;
     }
    
    public Set<TerminDto> findAll(){
        return new HashSet(this.content);
    }
    
    public boolean delete(TerminDto in){
         if(this.content.contains(in)){
             this.content.remove(in);
            
             return true;
         }
         return false;
     }
    
    public TerminDto wrap(TerminPO po){
        TerminDto res =new TerminDto();
        res.setId(po.getId());
        res.setOrt(po.getOrt());
        res.setAnlass(po.getAnlass());
        res.setTermin(po.getTermin());
        return res;
    }
}
