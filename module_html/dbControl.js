import conn from './mysqlpack.js'

// conn.connect(function (error) {
//   if (error) {
//     throw error;
//   }
//   console.log ("connencted.");
//   const sql = 'SELECT * FROM testtable3';
//   conn.query(sql, function (error, rows, fields) {
//     if (error) {
//       throw error;
//     } else {
//       for (var i = 0; i < rows.length; i++) {
//         console.log(rows)
//       }
//     }
//   })
// })

conn.connect()
conn.query(
  'show databases;',
  (err,result,fields) => {
    if (err) throw err;
    let abc = result
    console.log(result);
    // console.log(result);
    // return checkTable;
    // console.log(typeof(JSON.stringify(checkTable)));
    // test(abc);
    return abc;
  }
)
conn.query(
  'use testdb;',
  (err,result,fields) => {
    if (err) throw err;
    let abc = result
    console.log(result);
    // console.log(result);
    // return checkTable;
    // console.log(typeof(JSON.stringify(checkTable)));
    // test(abc);
    return abc;
  }
)
conn.query(
  'show tables;',
  (err,result,fields) => {
    if (err) throw err;
    let abc = result
    console.log(result);
    // console.log(result);
    // return checkTable;
    // console.log(typeof(JSON.stringify(checkTable)));
    // test(abc);
    return abc;
  }
)
conn.query(
  'select * from newdevs;',
  (err,result,fields) => {
    if (err) throw err;
    let abc = result
    console.log(result);
    // console.log(result);
    // return checkTable;
    // console.log(typeof(JSON.stringify(checkTable)));
    // test(abc);
    return abc;
  }
)
conn.query(
  `insert into newdevs (name)
  values ('곽윤호')`,
  (err,result,fields) => {
    if (err) throw err;
    let abc = result
    console.log(result);
    // console.log(result);
    // return checkTable;
    // console.log(typeof(JSON.stringify(checkTable)));
    // test(abc);
    return abc;
  }
)

// const BBB = {
//   'hi':'hello',
//   'name':':d'
// }
// test(BBB)

// function test(sample){
//   console.log(sample.name);
//   `<div>`

// }
conn.end(
  // conn.query(
  //   'select * from testtable3',
  //   (err,result,fields) => {
  //     if (err) throw err;
  //     checkTable = result;
  //     // console.log(typeof(JSON.stringify(checkTable)));
  //     return checkTable;
  //   }
  // )
)
// console.log(checkTable);
