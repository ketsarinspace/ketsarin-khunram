//import React from "react"; //version ใหม่กว่า เราไม่จำเป็นต้องนำเข้า import React from "react"; you can use --> import { ReactDOM } from "react-dom"; ได้เลย

//render หน้า App.jsx โดยการกำหนดส่วนนี้ให้อยู่ที่ document.querySelector("#root") มันจะแสดงเฉพาะส่วน #root ในไฟล์ index.html

import ReactDOM from "react-dom"; //ใช้งาน React กับ dom คู่กันเพื่อเชื่อมต่อไฟล์
import App from "./App"; //โครงสร้าง react ส่วน #root
import "./index.css"; //ส่วนการตกแต่ง โครงสร้างหน้าหลัก

ReactDOM.render(<App />, document.querySelector("#root"));
