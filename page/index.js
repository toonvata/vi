import React, { useState } from 'react';

const inlineStyles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  // เพิ่ม styles อื่นๆ ตามต้องการ
};

export default function Home() {
  // โค้ดส่วนอื่นๆ คงเดิม

  return (
    <div style={inlineStyles.container}>
      <h1 style={inlineStyles.title}>แบบประเมินธาตุเด่นตามหลักการแพทย์แผนไทยจากคัมภีร์ธาตุวิวรรณ์</h1>
      {/* แก้ไข className อื่นๆ เป็น inline styles หรือ CSS modules */}
      {/* ... */}
    </div>
  );
}
