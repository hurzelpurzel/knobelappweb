/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package de.pottmeier.controller;

import de.pottmeier.beans.TerminRepository;
import de.pottmeier.model.Termin;
import de.pottmeier.model.TerminDto;
import java.util.Date;
import java.util.Set;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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
    public long  create(@RequestParam() TerminDto termin) {
        return rep.create(termin);
        
    }
    
    @RequestMapping(path="termin",method= RequestMethod.DELETE)
    public void  delete(@RequestParam() TerminDto termin) {
       rep.delete(termin);
        
    }
    
    @RequestMapping(path = "termin/test",method= RequestMethod.GET)
    public TerminDto createNow() {
        TerminDto now = new TerminDto ();
        now.setTermin(new Date());
        now.setAnlass("test");
        now.setOrt("hier");
        now.setId(rep.create(now));
        return now;
    }
    
    @RequestMapping(path = "termine",method= RequestMethod.GET)
    public Set<TerminDto> getTermine(){
        return rep.findAll();
    }
}
