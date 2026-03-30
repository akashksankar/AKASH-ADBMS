import { LabTopic } from "./types";

export const LAB_DATA: LabTopic[] = [
  {
    title: "MySQL Mastery",
    experiments: [
      {
        id: 1,
        title: "DDL & Table Creation",
        type: "mysql",
        aim: "Create database company and tables Employee, Department.",
        content: `CREATE DATABASE company;
USE company;

CREATE TABLE Employee (
  Emp_No INT PRIMARY KEY,
  Emp_Name VARCHAR(20),
  Address VARCHAR(20),
  Sex CHAR(1),
  Dept VARCHAR(20),
  Salary INT,
  DOJ DATE,
  Branch VARCHAR(20)
);`,
        explanation: "DDL (Data Definition Language) is used to define the structure of your database. Think of it as building the skeleton of a house.",
        analogy: "Creating a table is like designing a form. You decide what fields (Name, Age, ID) are needed before you start filling in the actual data.",
        commands: [
          { name: "CREATE DATABASE", desc: "Creates a new database container." },
          { name: "USE", desc: "Selects the database to work with." },
          { name: "CREATE TABLE", desc: "Defines a new table with specific columns and data types." }
        ]
      },
      {
        id: 6,
        title: "Nested Queries & Filtering",
        type: "mysql",
        aim: "Retrieve data using subqueries and average-based filtering.",
        content: `SELECT * FROM course 
WHERE Internal_mark > (
  SELECT AVG(Internal_mark) 
  FROM course 
  WHERE Course_ID = 'bca3'
);`,
        explanation: "Nested queries (subqueries) allow you to use the result of one query as a condition for another. Here, we first find the average, then compare individual marks against it.",
        analogy: "It's like asking: 'Who in this class is taller than the average height?' First, you calculate the average height (inner query), then you check everyone (outer query).",
        commands: [
          { name: "AVG()", desc: "An aggregate function that calculates the mean value of a numeric column." },
          { name: "Subquery", desc: "A query nested inside another query, usually in the WHERE clause." }
        ]
      },
      {
        id: 12,
        title: "Stored Procedures",
        type: "mysql",
        aim: "Create a procedure for inserting student data.",
        content: `DELIMITER //
CREATE PROCEDURE add_student (
  IN p_id INT, 
  IN p_name VARCHAR(100), 
  IN p_dept VARCHAR(50)
)
BEGIN
  INSERT INTO students (id, name, department)
  VALUES (p_id, p_name, p_dept);
END //
DELIMITER ;

CALL add_student(1, 'Anu', 'CSE');`,
        explanation: "Stored Procedures are like functions in programming. You write the logic once and call it whenever needed, which is efficient and secure.",
        analogy: "Think of a Stored Procedure as a 'Macro' or a 'Saved Recipe'. Instead of writing the steps every time, you just say 'Make Pasta' (Call Procedure).",
        commands: [
          { name: "DELIMITER", desc: "Changes the statement terminator so you can write multi-line blocks." },
          { name: "CREATE PROCEDURE", desc: "Defines a reusable block of SQL code." },
          { name: "CALL", desc: "Executes a stored procedure." }
        ]
      },
      {
        id: 13,
        title: "Triggers for Automation",
        type: "mysql",
        aim: "Automatically deduct book copies when a book is issued.",
        content: `CREATE TRIGGER book_copies_deducts
AFTER INSERT ON book_issue 
FOR EACH ROW
BEGIN
  UPDATE book_det
  SET copies = copies - 1
  WHERE bid = NEW.bid;
END;`,
        explanation: "Triggers are 'event listeners' for your database. They automatically execute when a specific action (Insert, Update, Delete) happens.",
        analogy: "It's like an automatic light. When you open the door (Insert event), the light turns on (Trigger action) automatically.",
        commands: [
          { name: "CREATE TRIGGER", desc: "Defines an action to be taken automatically on table changes." },
          { name: "NEW", desc: "A keyword used in triggers to refer to the new row being inserted or updated." }
        ]
      }
    ]
  },
  {
    title: "MongoDB Insights",
    experiments: [
      {
        id: 1,
        title: "Collections & Basic CRUD",
        type: "mongodb",
        aim: "Create collections, insert data, and perform basic operations.",
        content: `use MyCev;
db.createCollection("db_mca");
db.db_mca.insertMany([
  { "reg_no": 1, "name": "Adhish", "age": 21 },
  { "reg_no": 2, "name": "Abi", "age": 22 }
]);
db.db_mca.find().limit(5);`,
        explanation: "MongoDB is NoSQL, meaning it stores data in flexible, JSON-like documents instead of rigid tables.",
        analogy: "If MySQL is a structured filing cabinet, MongoDB is a collection of folders where each paper can have slightly different information.",
        commands: [
          { name: "use", desc: "Switches to a specific database." },
          { name: "insertMany()", desc: "Inserts multiple documents into a collection at once." },
          { name: "find()", desc: "Retrieves documents from a collection." }
        ]
      },
      {
        id: 8,
        title: "Aggregation Framework",
        type: "mongodb",
        aim: "Find minimum and maximum credit for each subject.",
        content: `db.STUDENT.aggregate([
  { 
    "$group": {
      "_id": "$Sub_name", 
      "minCredit": { "$min": "$Credit" }, 
      "maxCredit": { "$max": "$Credit" }
    }
  }
]);`,
        explanation: "Aggregation is a powerful way to process data and return computed results, similar to GROUP BY in SQL but more flexible.",
        analogy: "It's like a factory assembly line. Raw data goes in, passes through different 'stages' (Group, Filter, Sort), and a finished report comes out.",
        commands: [
          { name: "aggregate()", desc: "Processes data records and returns computed results." },
          { name: "$group", desc: "Groups documents by a specified identifier for calculations." }
        ]
      }
    ]
  }
];
