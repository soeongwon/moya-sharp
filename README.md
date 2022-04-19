# 모야 서비스 최종 개발문서

1. 서비스 소개
2. 기술 스택
3. 폴더 구조
4. 사용 설명서
5. 최종 구현 디자인

- **팀장** 고지훈 : 프론트엔드, 개발 문서 작성, 스타일 가이드 구현
- 팀원 조민지 : 프론트엔드
- 팀원 박성원 : 프론트엔드

## 0. 실행 방법

```jsx
npm start
```

## **1. 서비스 소개**

> 글로벌 검색 엔진 서비스

해외 상장 기업 뉴스를 한글로 볼 수 있습니다. 실시간 수집한 해외 뉴스를 WiseTranslate의 경제 뉴스 AI번역 기술로 한글로 제공합니다.

### **1.2. 구현한 기능**

### **1.2.1. 키워드 검색(Home)**

![캡처.PNG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e2927c8f-daa5-**437d**-8f50-74b614de3167/캡처.png)

1. 모야에서 제공한 키워드 검색

### **1.2.2. 뉴스 기사 (News)**

![캡처.PNG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b2c014aa-6710-4e0f-9970-9c91de652fbf/캡처.png)

1. 언어 자동 감지 후 한글 번역
2. 북마크
3. 무한스크롤
4. 로딩 애니메이션 및 뉴스 기사 애니메이션

.

## **2. 기술 스택**

### **2.1. 프론트엔드**

- Typescript
- Redux-Tookit: 리덕스 라이브러리로 기존 리덕스에 비해 지루하고 반복적인 코드가 줄어 보다 편리한 리듀서 작성이 가능합니다.
- Redux-Saga : 비동기 데이터 패칭을 위해 도입했습니다.
- Css in Js : Emotion
- use-query-params: 페이지의 EndPoint를 편리하게 인식하고 업데이트가 가능합니다.
- _connected-react-router,_
- moment: time 변환 라이브러리, News Card의 Time을 standard기준으로 바꾸기 위해 사용했습니다.
- proxy: 프록시 서버 라이브러리
- React-cookie: 쿠키 라이브러리

## 3**. 폴더 구조**

```jsx
─public
│  └─images
└─src
    ├─api -- api 리스트
    │  ├─login
    │  ├─search
    │  └─tranlate
    ├─components -- 컴포넌트
    │  ├─common -- 공통 컴포넌트
    │  │  ├─Button
    │  │  ├─Confirm -- 컨펌 이벤트
    │  │  │  └─LoginConfirmButton
    │  │  ├─DropDown -- 드롭다운 컴포넌트
    │  │  │  ├─AlignmentDropDown
    │  │  │  └─ModalDropDown
    │  │  ├─Icon -- 아이콘 컴포넌트
    │  │  │  ├─Bookmark
    │  │  │  ├─Grid
    │  │  │  ├─Hamburger
    │  │  │  └─Share
    │  │  └─layout -- 레이아웃 컴포넌트
    │  │      ├─Footer
    │  │      └─Header
    │  ├─edit -- 키워드 편집
    │  ├─Home -- 메인 페이지
    │  │  ├─hooks -- 해당 도메인의 Custom Hooks
    │  │  ├─Intro
    │  │  ├─KeywordSelect -- 키워드
    │  │  └─Search -- 검색 폼
    │  ├─LoginService
    │  │  └─LoginButton
    │  ├─myPage
    │  └─News -- 검색 페이지
    │      ├─common
    │      ├─HeaderSearchBar
    │      ├─hooks
    │      ├─List -- 뉴스 기사 리스트
    │      ├─ListFilterOption -- 뉴스 검색 옵션 필터
    │      └─SearchNavigation -- 검색 폼
    ├─pages -- 페이지 컴포넌트
    ├─redux -- 리덕스 관련된 것은 모두 여기 존재
    │  ├─bookmark
    │  ├─keyword
    │  ├─news
    │  └─user
    ├─styles -- css
    ├─types -- typescript
    └─utils -- 유틸 함수를 모아둔 곳
        ├─cookies
        ├─moment
        └─proxy
```

## 4**. 스타일 가이드 & UI 컴포넌트**

스타일 가이드와 기본적인 UI 컴포넌트를 정리해두었습니다.

/style을 통해 들어갈 수 있습니다.
