/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package de.pottmeier.springweb;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 *
 * @author ludger
 */
@Configuration
@ComponentScan(basePackages = { "de.pottmeier.service" })
public class RootConfig {
	
  // @Bean public SomeClass someClass() { 
  //    return someInstance;
  // }
 
}
