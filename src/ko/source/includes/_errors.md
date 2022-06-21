# 에러

The SCLAB API uses the following error codes:
스크랩 API는 아래의 에러 코드를 사용 합니다:

에러코드 | 의미
-- | --
400 | Bad Request -- 요청 값이 잘못된 경우.
401 | Unauthorized -- API 토큰 값이 잘못된 경우.
403 | Forbidden -- 특정 이유에 따라 실행 불가 (중복 실행, 등).
404 | Not Found -- 존재하지 않는 요청
500 | Internal Server Error -- 내부 서버 에러, 잠시 후 다시 시도해 주세요.
503 | Service Unavailable -- 시스템 점검 중, 잠시 후 다시 시도해 주세요.
