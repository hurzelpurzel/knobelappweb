/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package de.pottmeier.controller;

import de.pottmeier.beans.TerminRepository;
import de.pottmeier.model.TerminDto;
import de.pottmeier.model.TerminPO;
import java.util.Date;
import java.util.Set;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ludger
 */
@RestController
@RequestMapping("/rest")
public class TerminProvider {
    
    @Autowired
    private TerminRepository rep;

    @RequestMapping(path="termin",method= RequestMethod.POST)
    public Long  create(@RequestParam() TerminDto termin) {
        return rep.create(termin).getId();
        
    }
    
    @RequestMapping(path="termin/{id}",method= RequestMethod.DELETE)
    public void  delete(@PathVariable(value="id") Long id) {
       rep.delete(id);
        
    }
    
    @RequestMapping(path="termin/{id}",method= RequestMethod.GET)
    public TerminDto  getTermin(@PathVariable(value="id") Long id) {
       return rep.get(id);
        
    }
    
    @RequestMapping(path = "termin/test",method= RequestMethod.GET)
    public TerminDto createNow() {
        TerminDto now = new TerminDto ();
        now.setTermin(new Date());
        now.setAnlass("test");
        now.setOrt("hier");
        return rep.create(now);
       
    }
    
    @RequestMapping(path = "termine",method= RequestMethod.GET)
    public Set<TerminDto> getTermine(){
        
        return rep.findAll();
    }
    
    
}
