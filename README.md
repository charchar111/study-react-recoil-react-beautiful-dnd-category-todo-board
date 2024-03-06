
# 투두 칸반 보드

## Link
https://charchar111.github.io/study-react-recoil-react-beautiful-dnd-category-todo-board/


## 컨셉

할일을 생성 및 관리하고 카테고리에 따라 정리 가능한 투두 리스트입니다. 추가로 유저가 드래그 앤 드롭을 통해 리스트를 다른 카테고리로 옮기거나 삭제할 수 있습니다.


## 기술 스택

- React
- [Recoil](Recoil-redux와의 비교)
- (react-hook-form)[react-hook-form]
- react-beautiful-dnd

## 세부사항
### Recoil-redux와의 비교
flux 디자인 패턴인 react에서는 컴포넌트 간에 중첩 관계가 복잡해질수록 상위 컴포넌트에서 하위 컴포넌트로 props를 전달하는 문제인 props drilling이 심화됩니다. 그 대안으로 상태 관리 라이브러리를 사용해야 하는데, 이 때 주로 비교되는 것이 단일 스토어인 redux와 분할 스토어인 recoil입니다. redux는 디버깅에 용이한 dev tool을 가지고 있고 다양한 기능을 가지고 있으나, 초기 세팅 단계에서 복잡한 코드를 작성하는 데 시간을 소모한다는 단점이 있습니다. 반면, recoil은 초기 세팅이 정말 간단하고 react의 state와 가장 유사한 상태 관리 패턴을 가지고 있어서 규모가 작은 프로젝트에서 생산성과 유지 보수 면에 우수합니다.
이 프로젝트의 규모가 크지 않다는 점, 그리고 향후 redux와의 비교를 위해서 recoil을 채택했습니다.

### react-hook-form
react-hook-form은 react에서 input-form을 구현할 때 필요한 반복적 코드를 대체해주며 유효성 검사와 에러 핸들링을 용이하게 합니다. 이런 생산성을 목적으로 이 프로젝트에서 도입하였습니다.

## 배운 점
- 상태관리 라이브러리를 통해 props drilling을 해결함으로써 유지 보수에 용이한 코드를 작성하는 방법
- react-hook-form을 통해 form의 에러 핸들링과 유효성 검사
- 드래그 앤 드롭 기능의 구현과 기본적인 원리 및 응용방법
