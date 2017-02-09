/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package de.pottmeier.controller;

import de.pottmeier.beans.TerminRepository;
import de.pottmeier.model.Termin;
import java.util.Date;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author ludger
 */
@Controller
@RequestMapping("/termin")
public class TerminProvider {
    
    @Autowired
    TerminRepository rep;

    @RequestMapping(method= RequestMethod.POST)
    public long  create(@RequestParam() Termin termin) {
        return rep.create(termin);
        
    }
    
    @RequestMapping(path = "/termin/test",method= RequestMethod.GET)
    public Termin createNow() {
        Termin now = new Termin ();
        now.setTermin(new Date());
        now.setAnlass("test");
        now.setOrt("hier");
        now.setId(rep.create(now));
        return now;
    }
}
