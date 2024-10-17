package com.nt.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Component;

import com.nt.Model.EmpClass;

@Component
public interface IService {
	
	public List<EmpClass> getAllEmployees();
	
	public EmpClass getEmployeesById(Integer idNo);
	
	public String saveEmployeeData(EmpClass empclass);
	
	public String deleteEmployeeById(Integer idNo);
	
	public String updateEmployee(EmpClass empclass);
}
