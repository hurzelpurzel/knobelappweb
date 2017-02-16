/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package de.pottmeier.beans;

import de.pottmeier.model.TerminDto;
import de.pottmeier.model.TerminPO;
import java.util.Set;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author ludger
 */
@Repository
public class TerminRepository {

    @PersistenceContext()
    EntityManager em;

    @Transactional
    public TerminDto create(TerminDto in) {
        TerminPO po = new TerminPO();
        BeanUtils.copyProperties(in, po);

        em.persist(po);
        em.flush();
        return wrap(po);
    }

    
    @Transactional
    public boolean change(TerminDto in) {
        TerminPO po = em.find(TerminPO.class, in.getId());
        if (po != null) {

            BeanUtils.copyProperties(in, po);

            em.merge(po);
            em.flush();
            return true;
        }
        return false;
    }

    public Set<TerminDto> findAll() {
        Query q = em.createQuery("select t from " + TerminPO.class.getSimpleName() + " t");
        return wrapAll((Set<TerminPO>) q.getResultList().stream().collect(Collectors.toSet()));

    }
    
    public TerminDto get(Long id){
        TerminPO po = em.find(TerminPO.class, id);
        if (po != null) {
            return wrap(po);
        }
        return null;
    }

    @Transactional
    public TerminDto delete(Long id) {
        TerminPO po = em.find(TerminPO.class, id);
        if (po != null) {
            em.remove(po);
            em.flush();
            TerminDto dto = wrap(po);
            dto.setId(null);
            return dto;
        }
        return null;
    }

    private static TerminDto wrap(TerminPO po) {
        TerminDto res = new TerminDto();
        res.setId(po.getId());
        res.setOrt(po.getOrt());
        res.setAnlass(po.getAnlass());
        res.setTermin(po.getTermin());
        return res;
    }

    private static Set<TerminDto> wrapAll(Set<TerminPO> in) {

        return in.stream().map((TerminPO po) -> wrap(po)).collect(Collectors.toSet());
    }

}
