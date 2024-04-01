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
// 렌더링 결과물
{ type: TestComponent, props: { a: 35, b: "yceffort" }, children: "안녕하세요" }
```

렌더링 프로세스가 실행되면 각 컴포넌트의 렌더링 결과물이 모두 수집한다. 이후 가상 DOM 과 비교해 실제 DOM 에 반영하기위한 모든 변경사항을 수집한다.

이러한 과정을 재조정(Reconciliation) 이라고 한다.
