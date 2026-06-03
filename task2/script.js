let students = [
  { name: "Aman", marks: 85 },
  { name: "Priya", marks: 45 },
  { name: "Rohit", marks: 72 },
  { name: "Neha", marks: 91 },
  { name: "Karan", marks: 38 }
]

function fetchStudents() {
  return new Promise((resolve) => {
    const filter = students.filter(e => e.marks >= 50);
    
    const map = students.map(e => e.name)
    
    const reduce = students.reduce((acc, c) => acc + c.marks, 0)
    
    setTimeout(() => {
      console.log(map);
      console.log(filter);
      console.log(reduce);
      console.log(reduce / students.length)
      resolve(0);
    }, 2000);
  });
}

async function analyzeMarks() {
  try {
    const data1 = await fetchStudents();
  } catch (error) {
    console.error("Error fetching student data:", error);
  }
}

analyzeMarks()