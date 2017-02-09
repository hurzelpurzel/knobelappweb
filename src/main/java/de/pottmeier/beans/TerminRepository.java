/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package de.pottmeier.beans;

import de.pottmeier.model.Termin;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.stereotype.Repository;

/**
 *
 * @author ludger
 */
@Repository
public class TerminRepository {
    private final AtomicLong sequence = new AtomicLong();
     
    private Set<Termin> content = new HashSet<Termin>();
    
    public long create(Termin in) {
        long id =sequence.get();
        in.setId(id);
        this.content.add(in);
        return id;
        
    }
    
     public boolean change(Termin in){
         if(this.content.contains(in)){
             this.content.remove(in);
             this.content.add(in);
             return true;
         }
         return false;
     }
    
    public Set<Termin> findAll(){
        return new HashSet(this.content);
    }
}
