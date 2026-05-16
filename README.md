# 조제전당 (Jojejeondang)

> 〈효율100〉 맞춤형화장품조제관리사 시험 학습자료 브랜드 — 정적 웹사이트

[**🌐 사이트 바로가기 →**](https://jehoon-yun.github.io/Joje-Jeondang/)

---

## 📦 〈효율100〉 자료 구성

- **이론교재** (175p) — 시험 출제 핵심만 압축
- **필기노트** — 회독용 핸드라이팅 정리본
- **암기테스트** (50문항) — 단답형 빈칸 테스트
- **D-40 스터디 캘린더** — 40일 합격 동선

---

## 🛠 기술 스택

- **HTML5** · **CSS3** · **Vanilla JavaScript** (외부 라이브러리 없음)
- **GitHub Pages** + **Vercel** 자동 배포
- 폰트: Gowun Batang · Fraunces · Cormorant Garamond · Pretendard
- 접근성: WCAG AA 이상

---

## 📁 저장소 구조

```
.
├── index.html              홈 — Hero · KPI · 비교 · 후기 · About
├── exam.html               시험 정보 — 합격률·일정·과목 비중·응시료
├── resources.html          자료실 — 예시문항·체험판·후기·About
├── store.html              교재 구매 — 비교·4종·패키지·FAQ
│
├── styles.css              공통 디자인 토큰 + 헤더/푸터/버튼
├── main.js                 스크롤 리빌·햄버거·FAQ 토글
│
├── assets/
│   └── logos/              favicon + 헤더/모바일/마스터 로고 SVG
│
├── images/
│   ├── covers/             4종 표지 (이론·필기·암기·캘린더)
│   └── samples/            예시문항 카드 미리보기 이미지
│
└── pdf/                    배포용 PDF 자료
    ├── preview_*.pdf       체험판 3종 (이론·필기·암기)
    ├── exam_sample_*.pdf   식약처 공식 예시문항 2종
    └── ref_*.pdf           시행기관 참고 자료 (가이드·채점·OMR)
```

---

## 🚀 로컬에서 미리보기

```bash
# Python이 있다면
python3 -m http.server 8000

# Node.js가 있다면
npx serve .

# 그 후 브라우저에서 http://localhost:8000 열기
```

---

## 📐 디자인 시스템 요약

### 컬러 — "종이 한 장 위에 잉크가 번지는 단계"

10단계 모카 스케일 + 2개 액센트:

```
paper-0    #FFFEFA   가장 밝은 표면
paper-100  #F4EFE6   body 기본 배경
tan-300    #D8CBB7   보더 / 구분선
mocha-500  #8C6B4A   eyebrow / 보조 텍스트
ink-700    #4F4638   본문
ink-900    #2A1F18   헤딩 / 1차 CTA

brick      #A8423A   시그니처 강조 (합격률·가격·마감)
sage       #6E7A5C   긍정 시그널 (합격 체크·후기)
```

### 타이포 — 한 명조, 한 산세리프, 한 이탤릭

- **Gowun Batang** — 한글 헤딩
- **Fraunces Italic** — 영문 강조, 매거진 톤
- **Cormorant Garamond** — eyebrow / 라벨
- **Pretendard** — 본문 / 캡션

### 원칙

- 모서리 라운드 0 (편집된 종이의 단정함)
- 본문 16px 이상 / line-height 1.75+
- 모션은 깊이 변화만 — `translateY(-2px)` + `box-shadow`
- WCAG AA 이상 명도 대비 보장

---

## 📞 외부 채널

- **크몽 스토어** — [kmong.com/@조제전당](https://kmong.com/@조제전당)
- **카카오톡 1:1 문의** — [오픈채팅](https://open.kakao.com/o/sMmTDOIh)
- **단톡방** — [오픈채팅](https://open.kakao.com/o/gyV2DOIh)
- **네이버 블로그** — [blog.naver.com/dianarttie](https://blog.naver.com/dianarttie)

---

## 📄 라이선스

이 저장소의 소스 코드(HTML/CSS/JS)는 조제전당의 소유물이며, 〈효율100〉 자료(`pdf/` 이하 모든 PDF)는 **저작권법으로 보호됩니다.** 무단 복제·배포·2차 가공을 금합니다.

© 2026 조제전당 · All rights reserved
