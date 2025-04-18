---
title: 스크랩 스튜디오 클라우드 서비스 (SaaS)
tags:
  - History
---

## 다음 릴리즈 예정
### 신규 기능
* [#242] AI 에이전트
* [#243] GPT4.1 모델 지원
* [#218] 로그인 화면 문구 수정 및 설명 삭제

## 릴리즈 v1.0, 2025-04-12
### 신규 기능
* [#218] API 새로고침 액션 추가
* [#218] API 변수 액션에 새로고침 옵션 추가
* [#218] 테이블 컬럼별로 사이즈 설정 기능 추가
* [#218] 숫자차트 미리보기 배경색상 설정 기능 추가
* [#218] 위치 데이터에 화면 맞춤 설정 시 여러개의 위치데이터를 전부 합쳐서 맞춤하도록 수정 (기존 마지막 로드 된 영역으로 맞춤)

### 버그 수정
* [#218] 공용 레이아웃 템플릿 복원 버그 수정
* [#68] 라인차트 값 표시 안되는 버그 수정

## 릴리즈 v1.0, 2025-03-29
### 신규 기능
* [#218] OD 시각화 정렬 기능 추가
* [#218] DB Agent 컬럼에 타입 정보 추가
* [#218] API 로딩 표시 페이지 설정 추가
* [#218] 레이아웃 새로고침 액션 추가
* [#218] undo / redo 키 추가 "command+shift+z", "ctrl+shift+z", "command+z", "ctrl+z"

### 버그 수정
* [#68] ODBC 연결 시 에러 발생하는 버그 수정
* [#68] OD 시각화에서 활성 컬러 틴트 -> 고정 컬러로 변경
* [#218] 컴바인에 빈값인 경우 빈 문자열로 전송되게 수정 및 null 문자열을 null 로 undefined 문자열을 undefined 로 전송되게 수정
* [#218] OD 로케이션에서 최대 최소값이 API 호출시점의 값으로 고정되는 버그 수정

## 릴리즈 v1.0, 2025-03-18
### 신규 기능
* [#218] API 데이터 JS Parser 추가
* [#218] Iframe 데이터 선택 박스를 검색 가능한 선택박스로 변경
* [#218] 위치 아이콘 틴트 1초에서 유지로 변경
* [#218] 선택 위치 아이콘 추가
* [#218] 위치 데이터에 방향선택 기능 추가

### 버그 수정
* [#68] 작은 사이즈의 레이아웃 버튼이 하단에 있을경우 가려지는 버그 수정
* [#68] 테이블 페이지 disabled 색상 변경
* [#68] debounce cancel 추가 (API 호출이 DATA_REFRESH 시 2회 중복되는 버그 수정)
* [#68] 위치 화살표 라인 단계 표시 안되는 버그 수정, 그라데이션, 넓이단계 0 표시되게 수정
* [#68] 최신 ollama LLM 모델에서 tools 관련 버그 수정 및 function call bug 수정
* [#68] AI Service bun version update to 1.2.5
* [#68] 컴바인 날짜 미리보기 관련 버그 수정
* [#68] OD 시각화 상태 유지 관련 버그 수정

## 릴리즈 v1.0, 2025-03-07
### 신규 기능
* [#224] 테이블 액션 기능 추가
* [#240] Ollama 모델정보가 없어도 사용할 수 있게 수정
* [#241] 무료 플랜 페이지 뷰 카운트 100 -> 1000 으로 변경
* [#68] 태국어 추가
* [#238] 데이터 접근권한 관리 추가
* [#218] 라인형 위치데이터에 시작과 종료 아이콘 추가
* [#218] 라인형 위치데이터의 라인의 z-index 수정
* [#218] DB Agent 에서 SELECT 구문 이외의 쿼리도 실행가능 하도록 수정

### 버그 수정
* [#68] 공개 레이아웃 템플릿 권한 버그 수정
* [#68] DB Agent 로딩 버그 수정

## 릴리즈 v1.0, 2025-01-03
### 신규 기능
* [#239] SCLAB Agent SSH 터널링 기능 추가

### 버그 수정
* [#68] 구독 기간이 경과된 경우 다시 구독이 안되는 버그 수정

## 릴리즈 v1.0, 2024-12-27
### 버그 수정
* [#68] 데이터 접근 권한 관련 버그 수정

## 릴리즈 v1.0, 2024-12-24
### 신규 기능
* [#232] 공용 레이아웃 템플릿 기능 추가
* [#232] 레이아웃 템플릿 업로드/다운로드 기능 추가
* [#234] 레이아웃 드레그 선택 기능 추가
* [#234] 맵에 도형에 데이터 연동 기능 추가

## 릴리즈 v1.0, 2024-12-12
### 신규 기능
* [#229] 트리맵 컬러 설정 기능 추가
* [#230] 포스트 노출 상태 관리 기능 추가
* [#231] 사이트에서 좋아요 제거
* [#228] ECharts Scatter 차트 기능 추가
* [#228] ECharts X/Y 축 줌 추가
* [#228] ECharts 테마 선택 추가
* [#228] ECharts 기본 라인 차트 추가
* [#228] ECharts 기본 바 차트 추가
* [#228] ECharts 기본 파이 차트 추가
* [#228] ECharts 기본 레이더 차트 추가
* [#228] ECharts 기본 캔들 차트 추가
* [#228] ECharts 기본 게이지 차트 추가
* [#228] ECharts 범례 스크롤 기능 추가
* [#228] Echarts IoT 데이터 연동 기능 추가
* [#228] 차트명 i18n 추가
* [#68] 페이지 에디터에 쉬프트 온/오프 버튼 추가
* [#233] 포스트 리스트에서 포스트 삭제 기능 추가
* [#233] 신규 포스트 실시간 업데이트 추가

### 버그 수정
* [#230] 포토서비스로 등록된 게시물의 상태 업데이트 버그 수정
* [#68] 핀아이콘 표시 버그 수정
* [#68] 테이블 CSV 다운로드 버그 수정
* [#68] 피봇 csv 다운로드 버그
* [#68] 언어 초기값 선택 관련 버그
* [#68] 설문 등록관련 버그 수정
* [#68] 테이블 iot 변경시 rows 하나만 남고 사라지는 버그

## 릴리즈 v1.0, 2024-11-15
### 신규 기능
* 레이아웃 템플릿 덮어쓰기 기능

## 릴리즈 v1.0, 2024-11-07
### 신규 기능
* 차트 액션 기능
* 레이아웃 템플릿 기능

## 릴리즈 v1.0, 2024-11-05

### 버그 수정

* Agent 쿼리 실행 시 세미콜론 관련 버그 수정
* Agent 에서 SQL 수정 시 체크된 테이블 정보가 SQL AI로 정상적으로 전달되지 않는 버그 수정

## 릴리즈 v1.0, 2024-10-25

### 신규 기능

#### 위치 데이터

* 숫자 차트에 값에 콤마를 추가할지 여부를 선택할 수 있는 기능 추가
* GIS, 위치데이터 팝업의 상단 배경 수정 기능 추가

### 버그 수정

* 컴바인 옵션이 많을경우 느려지는 버그 수정
* Agent API 에서 파라미터가 중복되는 버그 수정
* Agent API 에서 세미콜론이 여러개 추가했을때 발생되는 버그 수정

## 릴리즈 v1.0, 2024-10-24

### 버그 수정

* 페이지 이동 시 API 변수 초기화
* 날짜 컴바인 버그 수정
* 숫자 차트에 값이 없는 경우 빈값으로 보이게 수정

## 릴리즈 v1.0, 2024-10-22

### 신규 기능

* 컴바인 날짜에 시간, 분, 초 관련 기능 추가
* 위치 아이콘 최대 사이즈 60px -> 720px 로 변경

### 버그 수정

* 에이전트 LIMIT 구문이 여러개인 경우 인식 갯수 관련 오류 수정
* 맵 객체 로딩 오류 시 무한 로딩 오류 수정
* 컴바인 아이템이 많은경우 브라우져가 꺼지는 오류 수정
* S3 허브 커스텀 위치 아이콘 복사 버그 수정

## 릴리즈 v1.0, 2024-10-16

### 신규 기능

#### 위치 데이터

* OD 시각화 추가
* Line 시각화 추가

#### API

* 폴링기능에 시간, 초 간격 추가

### 버그 수정

* Leaflet -> Mapbox 로 액션호출 시 호환성 버그 수정
