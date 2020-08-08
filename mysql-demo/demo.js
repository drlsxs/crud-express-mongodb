var mysql      = require('mysql');
// 创建连接  
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '00012',
  database : 'ysl',
  table    : 'teacher'
});

// 连接数据库 
connection.connect();
 
// 执行数据操作
// 查询
// connection.query('SELECT * FROM `teacher`', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });

// 插入
// connection.query('insert into teacher values(null,"drlsxs","male","sichuan" )', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
//   });

// 删除
// connection.query('delete from teacher where id=3', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
//   });

// 修改
// connection.query('update teacher set sex="Male" where sex="male"', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
//   });


// 关闭连接
connection.end();