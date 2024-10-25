---
title: 스크랩 스튜디오 온프레미스
tags:
  - History
---

## Release v1.1, 2024-10-25

### New Features

#### Location Data

* Added option to select whether to include commas in the values of number charts
* Added function to customize the top background of GIS and location data pop-ups

### Bug Fixes

* Fixed an issue where performance slowed when using numerous combine options
* Resolved a bug where parameters were duplicated in the Agent API
* Fixed an issue in the Agent API where adding multiple semicolons caused errors

## 릴리즈 v1.1, 2024-10-24

### 버그 수정

* 페이지 이동 시 API 변수 초기화
* 날짜 컴바인 버그 수정
* 숫자 차트에 값이 없는 경우 빈값으로 보이게 수정

## 릴리즈 v1.1, 2024-10-22

### 신규 기능

* 컴바인 날짜에 시간, 분, 초 관련 기능 추가
* 위치 아이콘 최대 사이즈 60px -> 720px 로 변경

### 버그 수정

* 에이전트 LIMIT 구문이 여러개인 경우 인식 갯수 관련 오류 수정
* 맵 객체 로딩 오류 시 무한 로딩 오류 수정
* 컴바인 아이템이 많은경우 브라우져가 꺼지는 오류 수정

## 릴리즈 v1.1, 2024-10-16

### 신규 기능

#### 위치 데이터

* OD 시각화 추가
* Line 시각화 추가

#### API

* 폴링기능에 시간, 초 간격 추가

### 버그 수정

* Leaflet -> Mapbox 로 액션호출 시 호환성 버그 수정
