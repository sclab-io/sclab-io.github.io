---
title: 스크랩 스튜디오 온프레미스
tags:
  - History
---

## Release v1.1, 2024-10-22

### New Features

* Added functionality for combining date with hours, minutes, and seconds
* Changed maximum size of location icon from 60px to 720px

### Bug Fixes

* Fixed the issue with recognizing the number of occurrences when there are multiple LIMIT clauses in agent
* Fixed infinite loading issue when map object loading fails
* Fixed browser crashing issue when there are too many combine items

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
