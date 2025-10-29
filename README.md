# Resume Website (React + TypeScript + Vite)

นี่คือโครงการหน้าเว็บไซต์ประวัติส่วนตัว (resume / portfolio) ที่สร้างด้วย React + TypeScript และ Vite พร้อมการตั้งค่า TailwindCSS, ESLint และปลั๊กอินที่เกี่ยวข้อง

ส่วนประกอบหลักในโปรเจกต์:
- หน้า: `Hero`, `About`, `Experience`, `Skills`, `Education`, `Projects`, `Contact`
- คอมโพเนนต์เอฟเฟกต์: `FloatingDots` (จุดลอยที่ตอบสนองต่อเมาส์)
- ธีม: `ThemeContext` สำหรับโหมดสว่าง/มืด (เก็บใน `src/contexts/ThemeContext.tsx`)

## เทคโนโลยีหลัก
- React 19
- TypeScript
- Vite
- TailwindCSS
- AOS (สำหรับอนิเมชันบนสกอร์ล)
- EmailJS (ส่งอีเมลจากฟอร์ม)

## การเริ่มต้น (Development)
ก่อนอื่นให้ติดตั้ง dependencies:

```bash
npm install
```

เริ่มเซิร์ฟเวอร์สำหรับพัฒนา (Vite):

```bash
npm run dev
```

สคริปต์ที่มีใน `package.json` (โปรเจกต์นี้):

- `dev` — เริ่ม Vite dev server
- `build` — คอมไพล์ TypeScript และสร้าง bundle ด้วย Vite
- `preview` — รัน preview server สำหรับ build ที่ได้
- `lint` — รัน ESLint

ตัวอย่างการรัน build และดูผลลัพธ์:

```bash
npm run build
npm run preview
```

## โครงสร้างสำคัญของไฟล์
- `src/contexts/ThemeContext.tsx` — provider สำหรับธีม (มี `isDark` และ `toggleTheme`)
- `src/components/FloatingDots.tsx` — คอมโพเนนต์จุดลอย (ต้องรับ prop `isDark: boolean` เพื่อเปลี่ยนสีตามธีม)
- `src/App.tsx` — จุดเริ่มของแอป รวมการเรียกใช้ `ThemeProvider` และคอมโพเนนต์หลัก

## วิธีใช้ `isDark` กับ `FloatingDots`
`FloatingDots` ออกแบบมาให้รับ prop ชื่อ `isDark` เพื่อสลับสีระหว่างโหมดสว่างและโหมดมืด ถ้าต้องการเชื่อมกับ context ให้ใช้ `useTheme` จาก `ThemeContext` ใน `App.tsx` ดังนี้:

```tsx
import React from 'react';
import { useTheme } from './contexts/ThemeContext';
import FloatingDots from './components/FloatingDots';

function App() {
  const { isDark } = useTheme();

  return (
    <div>
      <FloatingDots isDark={isDark} />
      {/* ...ส่วนอื่น ๆ ของแอป */}
    </div>
  );
}

export default App;
```

หมายเหตุ: ในโปรเจกต์ปัจจุบัน `ThemeProvider` ห่ออยู่ภายนอก `App` (หรือหากคุณห่ออยู่ใน `App` เอง ให้แน่ใจว่าเรียก `useTheme` ภายใน component ที่ห่อด้วย `ThemeProvider`).

## การปรับแต่ง Tailwind / ESLint
- การตั้งค่า Tailwind อยู่ใน `tailwind.config.js` และ `postcss.config.js` — ปรับตามต้องการ
- ESLint ถูกตั้งค่าไว้ใน `eslint.config.js` — คุณสามารถรัน `npm run lint` เพื่อตรวจหาข้อผิดพลาด

## การปรับใช้ (Deploy)
ใน repository นี้มีไฟล์ `firebase.json` อยู่แล้ว — ถ้าต้องการ deploy ไปยัง Firebase Hosting ให้ใช้ Firebase CLI (ต้องล็อกอินและตั้งค่า project ก่อน)

ตัวอย่างขั้นตอนสั้น ๆ:

```bash
# ติดตั้ง Firebase CLI (ถ้ายังไม่มี)
npm install -g firebase-tools

# เข้าสู่ระบบ
firebase login

# เลือก/เชื่อมต่อ project ของคุณ (ครั้งแรก)
firebase init hosting

# สร้างแล้ว deploy
npm run build
firebase deploy --only hosting
```

หากคุณใช้บริการอื่น (Netlify, Vercel ฯลฯ) ให้ใช้ไฟล์ `dist` ที่ได้จาก `vite build` เป็นแหล่งสำหรับการ deploy

## เคล็ดลับและข้อควรระวัง
- แนะนำใช้ Node.js เวอร์ชันที่ทันสมัย (เช่น Node 16+ หรือ 18+) เพื่อความเข้ากันได้กับ Vite และ dependencies
- ถ้าจุดลอย (`FloatingDots`) ยังไม่แสดง ให้ตรวจสอบว่าคุณได้ส่ง prop `isDark` และคอมโพเนนต์ถูก mount ใน DOM ที่มีขนาดหน้าต่าง (ไม่ซ่อนด้วย display:none)

## วิธีส่งข้อมูลติดต่อ / ปรับแต่ง
- ฟังก์ชันส่งเมลใช้ `@emailjs/browser` — ดูการตั้งค่าในส่วน `Contact.tsx` และตั้งค่า EmailJS service/template/user ID ผ่าน environment variables หรือโค้ดคอนฟิก

## Contributing
ยินดีรับ PR เล็ก ๆ เพื่อปรับปรุง UI หรือแก้บั๊ก โปรดทำตามขั้นตอน:

1. Fork โปรเจกต์
2. สร้าง branch ใหม่
3. ทำการแก้ไข, รัน `npm run lint` และทดสอบด้วย `npm run dev`
4. เปิด PR และอธิบายการเปลี่ยนแปลงของคุณ


