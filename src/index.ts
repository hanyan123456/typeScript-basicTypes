// import { type } from "os";

// let say: string = 'hello';
//  function total (a:number, b:number){
//      return a+b
//  }
// total(3, 4)

// let nums: number[] = [1,2,3,4]// 数字类型的数组 建议使用这个

// let nums: Array<number>// 数字类型的数组

// let o:object
// o={
//     name:'ddd',
//     age:123
// }


// 其他类型

// 联合类型:
//let name: string | undefined = undefined
// let name: string | undefined;
// if(typeof name ==='string'){    
// }


// void类型:通常用于约束函数返回值，表示不返回值

// never类型：通常用于约束函数返回值，表示函数永远不会结束

// 字面量类型：使用一个值被约束
// let gender:"男"|"女";
// gender = "女"; 只能使用上面2个值
// let user: {
//     name:string
//     age:number
// }
// user = {
// name:'34',
// age:12
// }

// 元祖类型(Tuple):表示固定长度数组，并且数组每一项的类型都确定
// let data: [string,number];
// data= ['aaa',123]

// any类型:可以绕过类型检查，any类型数据可以赋值给任意类型
// let data:any;
// data=2222;
// data='2222'




// 类型别名
// 对已知的一些类型定义名称
// type User ={
//     name:string
//     age:number
//     gender:"男"|"女"
// }
// let u:User
// u ={
//     name:'sss',
//     gender:'女',
//     age:34
// }
// function getUsers():User[]{
//     return [];
// }