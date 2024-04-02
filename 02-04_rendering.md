# 렌더링은 어떻게 일어나는가?

렌더링 : 모든 컴포넌트들이 현재 자신들이 가지고 있는 props 와 state 의 값을 기반으로 어떻게 UI를 구성하고 어떤 DOM 결과를 제공할 것인지 계산하는 일련의 가정

* 최초 렌더링 : 처음 페이지에 진입하면 발생
* 리렌더링 : 
  * `setSate` 가 실행되는 경우
  * 클래스형 컴포넌트의 `forceUpdate` 가 실행되는 경우
  * `useReducer` 의 `dispatch` 가 실행되는 경우
  * `key props` 가 변경되는 경우
  * `props` 가 변경되는 경우
  *  부모 컴포넌트가 렌더링 될 경우

## 리액트의 렌더링 프로세스

JSX 문법을 통해 구성된 컴포넌트의 컴파일 결과물은 다음과 같다.

**Before**

```jsx
function Hello() {
  return (
    <TestComponent a={35} b="yceffort">
      안녕하세요.
    </TestComponent>
  )      
}
```

**After**

```js
function Hello() {
  return React.createElement(
    TestComponent,
    { a: 35, b: 'yceffort' },
    '안녕하세요'
  ) 
}
```

`Hello` 의 결과물은 다음과 같다.

```js
const 렌더링_결과물 = { type: TestComponent, props: { a: 35, b: "yceffort" }, children: "안녕하세요" }
```

렌더링 프로세스가 실행되면 각 컴포넌트의 렌더링 결과물이 모두 수집한다. 이후 가상 DOM 과 비교해 실제 DOM 에 반영하기위한 모든 변경사항을 수집한다.

이러한 과정을 재조정(Reconciliation) 이라고 한다.

## 렌더와 커밋

### 렌더 단계 

컴포넌트를 실행해 이 결과와 이전 가상 DOM 을 비교해서 변경 유무를 체크하는 단계. 

`type`, `props`, `key` 를 비교하여 하나라도 변경된 것이 있으면 변경이 필요한 컴포넌트로 체크함.

렌더 단계에서 변경을 감지할 수 없었다면 커밋 단계는 생략된다.

### 커밋 단계 

변경사항을 실제 DOM 에 적용해 사용자에게 보여주는 과정.

각 컴포넌트의 렌더링 이후 `componentDidMount`, `componentDidUpdate`, `useLayoutEffect` 를 호출함.

이러한 기능들은 주로 렌더링 이후 브라우저가 페인팅을 하기 전에 추가 로직을 실행하기 위해 존재함.

ex) DOM 의 사이즈 측정







