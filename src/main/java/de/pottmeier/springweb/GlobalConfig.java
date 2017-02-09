/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package de.pottmeier.springweb;

import java.util.logging.Logger;
import org.springframework.boot.autoconfigure.web.DispatcherServletAutoConfiguration;
import org.springframework.boot.context.embedded.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.DispatcherServlet;

/**
 *
 * @author ludger
 */
@ControllerAdvice
public class GlobalConfig {

    private static final Logger LOG = Logger.getLogger(GlobalConfig.class.getName());
    
    @ExceptionHandler(Exception.class)
    public String handleError(Exception e){
        LOG.severe(e.getMessage());
        return "error";
    }
    
         
   
    
}
