# 자바스크립트의 동등 비교

동등 비교의 중요성
* 리액트의 렌더링은 props 의 동등 비교에 따른 결과이다.
* 얕은 비교가 리액트에서 어떻게 작동하는지 이해하지 못하면 렌더링 최적화에 어려움을 겪을 가능성이 크다.

## Object.is

Object.is 는 두개의 인수의 동등성을 비교하는 메서드 이다.

[MDN: Object.is](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

Object.is 는 일치 연산자(==), 완전 일치 연산자(===)와 다르게 동작한다.

Object.is 가 좀 더 개발자가 기대하는 방시으로 정확히 비교한다.

다만, 객체동등성 비교는 === 와 동일하다.

```js
-0 === +0 // true
Object.is(-0, +0) // false

Number.NaN === NaN // false
Object.is(Number.NaN, NaN) // true

NaN === 0 / 0 // false
Object.is(NaN, 0 / 0) // true
```

## 리액트의 shallowEqual

[react/packages/shared/shallowEqual.js](https://github.com/facebook/react/blob/main/packages/shared/shallowEqual.js)

shallowEqual
1. Object.is 를 통한 비교 수행
2. 두 값이 객체이면 객체 간 얕은 비교 수행

## React.memo

React.memo 는 shallowEqual 로 얕은 비교를 수행한다. 

중첩 객체의 경우 shallowEqual 의 결과는 항상 false 이다.

때문에 React.memo 컴포넌트의 중첩 객체를 props 으로 구성하는 경우 의도와는 달리 메모이제이션 되지 못한다. 
