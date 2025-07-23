const employees = [
  {
    id: 1,
    name: "ก้องภพ",
    department: "IT",
    position: "Developer",
    salary: 65000,
    startDate: "2021-04-15",
    isActive: true,
  },
  {
    id: 2,
    name: "วิมล",
    department: "Marketing",
    position: "Marketing Manager",
    salary: 92000,
    startDate: "2019-08-01",
    isActive: true,
  },
  {
    id: 3,
    name: "สมศักดิ์",
    department: "IT",
    position: "Senior Developer",
    salary: 88000,
    startDate: "2018-02-20",
    isActive: false,
  },
  {
    id: 4,
    name: "จินตนา",
    department: "Sales",
    position: "Sales Rep",
    salary: 58000,
    startDate: "2022-11-10",
    isActive: true,
  },
  {
    id: 5,
    name: "อมร",
    department: "IT",
    position: "Developer",
    salary: 68000,
    startDate: "2023-07-01",
    isActive: true,
  },
  {
    id: 6,
    name: "สุดา",
    department: "Sales",
    position: "Sales Manager",
    salary: 105000,
    startDate: "2017-05-30",
    isActive: true,
  },
];

console.log("ข้อ 1: สร้าง Array ใหม่ที่มีเฉพาะข้อมูลของพนักงานที่ ยังทำงานอยู่ทั้งหมด");
const activeEmployees = employees.filter(emp => emp.isActive);
console.log(activeEmployees);

console.log("ข้อ 2: สร้าง Array ใหม่ที่เก็บเฉพาะ ชื่อ ของพนักงานทุกคน");
const allNames = employees.map(emp => emp.name);
console.log(allNames);

console.log("ข้อ 3: หาข้อมูลของพนักงานที่มี id เท่ากับ 4");
const employeeWithId4 = employees.find(emp => emp.id === 4);
console.log(employeeWithId4);

console.log("ข้อ 4: ตรวจสอบว่ามีพนักงานคนใดคนหนึ่งที่ทำงานในแผนก 'Marketing' หรือไม่ (ตอบเป็น true หรือ false)");
const hasMarketingEmployee = employees.some(emp => emp.department === "Marketing");
console.log(hasMarketingEmployee);


console.log("ข้อ 5: หารายชื่อของพนักงานทุกคนที่อยู่ในแผนก 'IT'");
const itEmployees = employees.filter(emp => emp.department === "IT");
console.log(itEmployees);

console.log("ข้อ 6: คำนวณ เงินเดือนรวมทั้งหมด ที่บริษัทต้องจ่ายให้พนักงาน ทุกคน ในแต่ละเดือน");
const totalMonthlySalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(totalMonthlySalary);

console.log("ข้อ 7: หาข้อมูลของพนักงานที่ เงินเดือนสูงสุด ในบริษัท (เอามาแค่คนเดียว)");
const highestPaidEmployee = employees.reduce((max, emp) => emp.salary > max.salary ? emp : max);
console.log(highestPaidEmployee); 

console.log("ข้อ 8: หารายชื่อของพนักงานที่เริ่มทำงาน หลังปี 2020 และ ยังทำงานอยู่ จากนั้นจัดเรียงชื่อตามลำดับตัวอักษร");
const employeesAfter2020 = employees
    .filter(emp => emp.isActive && new Date(emp.startDate) > new Date("2020-12-31"))
    .map(emp => emp.name)
    .sort();
console.log(employeesAfter2020); 

console.log("ข้อ 9: คำนวณ เงินเดือนเฉลี่ย ของพนักงานในแผนก 'IT' ที่ ยังทำงานอยู่");
const itActiveEmployees = employees.filter(emp => emp.isActive && emp.department === "IT");
const avgITSalary = itActiveEmployees.reduce((sum, emp) => sum + emp.salary, 0) / itActiveEmployees.length;
console.log(avgITSalary); 