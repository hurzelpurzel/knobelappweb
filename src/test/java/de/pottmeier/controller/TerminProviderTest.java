/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package de.pottmeier.controller;

import de.pottmeier.model.TerminDto;
import java.util.Set;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 *
 * @author ludger
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class TerminProviderTest {
    
    public TerminProviderTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
    }
    
    @After
    public void tearDown() {
    }

    /**
     * Test of create method, of class TerminProvider.
     */
    //@Test
    public void testCreate() {
        System.out.println("create");
        TerminDto termin = null;
        TerminProvider instance = new TerminProvider();
        TerminDto expResult = null;
        TerminDto result = instance.create(termin);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of delete method, of class TerminProvider.
     */
    //@Test
    public void testDelete() {
        System.out.println("delete");
        TerminDto termin = null;
        TerminProvider instance = new TerminProvider();
        instance.delete(termin);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of createNow method, of class TerminProvider.
     */
    @Test
    public void testCreateNow() {
        System.out.println("createNow");
        TerminProvider instance = new TerminProvider();
        TerminDto expResult = null;
        TerminDto result = instance.createNow();
        assertNotNull(result);
        
    }

    /**
     * Test of getTermine method, of class TerminProvider.
     */
    //@Test
    public void testGetTermine() {
        System.out.println("getTermine");
        TerminProvider instance = new TerminProvider();
        Set<TerminDto> expResult = null;
        Set<TerminDto> result = instance.getTermine();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }
    
}
