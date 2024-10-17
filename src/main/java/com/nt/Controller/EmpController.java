package com.nt.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nt.Model.EmpClass;
import com.nt.Service.IService;

@Component
@RestController
@CrossOrigin(origins = "http://127.0.0.1:5501")
public class EmpController {
	
	@Autowired
	private IService iServ;
	
	@GetMapping("/showAllData")
	public ResponseEntity<List<EmpClass>> showAllEmpData() {
		List<EmpClass> list = iServ.getAllEmployees();
		list.forEach(System.out::println);
		return new ResponseEntity<List<EmpClass>>(list,HttpStatus.OK);
	}
	
	@GetMapping("/showDataById/{ids}")
	public ResponseEntity<EmpClass> showDataById(@PathVariable Integer ids){
		EmpClass emp = iServ.getEmployeesById(ids);
		System.out.println("emp data : "+emp.toString());
		return new ResponseEntity<EmpClass>(emp,HttpStatus.OK);
	}
	
	@PostMapping("/saveData")
	public ResponseEntity<String> savedEmployeeData(@RequestBody EmpClass empclass){
		String res = iServ.saveEmployeeData(empclass);
		System.out.println("result : "+res);
		return new ResponseEntity<String>(res,HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{empno}")
	public ResponseEntity<String> deleteEmpData(@PathVariable Integer empno){
		String res = iServ.deleteEmployeeById(empno);
		System.out.println("result : "+res);
		return new ResponseEntity<String>(res,HttpStatus.OK);
	}
	
	@PutMapping("/update")
	public ResponseEntity<String> updateEmployeeData(@RequestBody EmpClass empclass){
		String res = iServ.updateEmployee(empclass);
		System.out.println("result : "+res);
		return new ResponseEntity<String>(res,HttpStatus.OK);
	}
	
	
}
