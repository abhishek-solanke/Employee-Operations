package com.nt.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nt.Model.EmpClass;
import com.nt.Repository.IRepository;

@Service
public class ServiceImpl implements IService{
			
	@Autowired
	private IRepository iRepo;
	
	@Override
	public List<EmpClass> getAllEmployees(){
		List<EmpClass> list = iRepo.findAll();
		return list;
	}
	
	@Override
	public EmpClass getEmployeesById(Integer idNo) {
		Optional<EmpClass> opt = iRepo.findById(idNo);
		if(opt.isEmpty()) {
			throw new NullPointerException();
			}
		else{
			return opt.get();
			}
										}
	
	@Override
	public String saveEmployeeData(EmpClass empclass) {
		EmpClass res = iRepo.save(empclass);
		return "EMployee Data is saved with id value :"+res.getEmpno();
	}
	
	
	@Override
	public String deleteEmployeeById(Integer idNo) {
		Optional<EmpClass> opt = iRepo.findById(idNo);
		if(opt.isEmpty()) {
			return "Data Not found";
		}
		else {
			iRepo.deleteById(idNo);
			return  opt.get().getEname()+"'s record deleted....";
			}
		}
	
	
	@Override
	public String updateEmployee(EmpClass empclass) {
		EmpClass res = iRepo.save(empclass);
		return res.getEname()+"'s data updated....";
	}
	
	
	
}
