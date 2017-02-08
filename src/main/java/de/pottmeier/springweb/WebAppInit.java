/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package de.pottmeier.springweb;

import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.FilterRegistration;
import javax.servlet.ServletContext;
import javax.servlet.ServletRegistration;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.DispatcherServlet;

/**
 * @see http://www.rockhoppertech.com/blog/spring-mvc-configuration-without-xml/
 * @author ludger
 */
public class WebAppInit implements WebApplicationInitializer {

    private static final Logger LOG = Logger.getLogger(WebAppInit.class.getName());

    @Override
    public void onStartup(ServletContext servletContext) {
        // Create the root appcontext
        AnnotationConfigWebApplicationContext rootContext = new AnnotationConfigWebApplicationContext();
        rootContext.register(RootConfig.class);
        // since we registered RootConfig instead of passing it to the constructor
        rootContext.refresh();

        // Manage the lifecycle of the root appcontext
        servletContext.addListener(new ContextLoaderListener(rootContext));
        servletContext.setInitParameter("defaultHtmlEscape", "true");

        // now the config for the Dispatcher servlet
        AnnotationConfigWebApplicationContext mvcContext = new AnnotationConfigWebApplicationContext();
        mvcContext.register(WebMvcConfig.class);

        // The main Spring MVC servlet.
        ServletRegistration.Dynamic appServlet = servletContext.addServlet(
                "appServlet", new DispatcherServlet(mvcContext));
        appServlet.setLoadOnStartup(1);
        Set<String> mappingConflicts = appServlet.addMapping("/");

        if (!mappingConflicts.isEmpty()) {
            for (String s : mappingConflicts) {
                LOG.log(Level.SEVERE,"Mapping conflict: " + s);
            }
            throw new IllegalStateException(
                    "'appServlet' cannot be mapped to '/' under Tomcat versions <= 7.0.14");

        }
FilterRegistration.Dynamic fr = servletContext.addFilter("encodingFilter",  
      new CharacterEncodingFilter());
   fr.setInitParameter("encoding", "UTF-8");
   fr.setInitParameter("forceEncoding", "true");
   fr.addMappingForUrlPatterns(null, true, "/*");
    
    }}