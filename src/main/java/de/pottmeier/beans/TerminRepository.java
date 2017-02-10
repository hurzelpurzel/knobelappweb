/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package de.pottmeier.beans;

import de.pottmeier.model.TerminDto;
import de.pottmeier.model.TerminPO;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Repository;

/**
 *
 * @author ludger
 */
@Repository
public class TerminRepository {
    
    private static final String PERSISTENCE_UNIT_NAME = "knobelapp_pu";
   
    
    
    @PersistenceContext(unitName = PERSISTENCE_UNIT_NAME)
    EntityManager em;
    

    public TerminDto create(TerminDto in) {
        TerminPO po = new TerminPO();
        BeanUtils.copyProperties(in, po);
        em.persist(po);
        
        return wrap(po);
    }
    
     public boolean change(TerminDto in){
         TerminPO po = em.find(TerminPO.class, in.getId());
         if(po != null){
             
            BeanUtils.copyProperties(in, po);
             em.merge(po);
             
             return true;
         }
         return false;
     }
    
    public Set<TerminDto> findAll(){
        Query q=em.createQuery("select * from termin");
        return  wrapAll((Set<TerminPO>)q.getResultList().stream().collect(Collectors.toSet()));
        
    }
    
    public boolean delete(TerminDto in){
        TerminPO po = em.find(TerminPO.class, in.getId());
        if(po != null){
             em.remove(po);
             return true;
        }
         return false;
     }
    
    private static TerminDto wrap(TerminPO po){
        TerminDto res =new TerminDto();
        res.setId(po.getId());
        res.setOrt(po.getOrt());
        res.setAnlass(po.getAnlass());
        res.setTermin(po.getTermin());
        return res;
    }
    
    private static Set<TerminDto> wrapAll(Set<TerminPO> in){
        
        return in.stream().map((TerminPO po) -> wrap(po)).collect(Collectors.toSet());
    }
    
    
    
}
