---
title: API
tags:
  - DATA
  - API
---


![Get API data](./21.png)
- API 아이콘을 드래그 앤 드롭하여 끌고 오면 위처럼 팝업창이 뜬다.
- API 이름을 입력하고 GET 옆에 API 주소를 입력하고 전송을 클릭한다.
- 아래 Pretty 쪽에 상세 데이터가 뜬다.
- 오른쪽에 원하는 데이터 종류가 뜨지 않는다면 Pretty 아래에서 원하는 데이터의 Root와 Path를 찾아서 입력한 뒤 A모양 버튼을 클릭한다. Pretty 아래 왼쪽 숫자옆 화살표 버튼을 클릭해 보고 원하는 데이터가 들어 있는 상위의 Root명을 찾아 준다. 위 데이터에선 “RealtimeCityAir” 아래 모든 데이터가 들어 있음을 알 수 있다. 그리고 “row” 안에 필요한 상세 데이터가 있음을 확인한다. 오른쪽 Root Path 칸에 “RealtimeCityAir.row”를 입력해 준다. 오른쪽 A모양 버튼을 클릭하면 데이터 Path 와 Label이 추가로 들어오는 것을 확인 가능하다.
- 분단위로 폴링 주기를 선택할 수 있다. 폴링 안함은 데이터를 한 번만 가져오는 것이다.
- API 이름을 입력해 주고 저장을 누르면 API 데이터가 생성되어 청록색 육각형이 하나 더 생긴 것을 알 수 있다.
- FIEXED 형 parameter는 reuqest를 전송할때만 사용되고 클라이언트 단에서는 해당 값들을 확인 할 수 없기 때문에 키값등의 유출에 대한 걱정을 하지 않아도 됩니다.
<br/><br/>

<iframe width="100%" height="640" src="https://www.youtube.com/embed/ZTcO_Gdhtmk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<br/><br/>

## API Data Flow
![API Data flow](./API.png)