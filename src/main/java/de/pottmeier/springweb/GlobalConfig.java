/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package de.pottmeier.springweb;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

/**
 *
 * @author ludger
 */
@ControllerAdvice
public class GlobalConfig {
    
    @ExceptionHandler(Exception.class)
    public String handleError(){
        return "error";
    }
}
