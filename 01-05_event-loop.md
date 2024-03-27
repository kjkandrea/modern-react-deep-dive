# 이벤트루프와 비동기 통신의 이해

[Javascript Visualizer 9000](https://www.jsv9000.app/)

## 싱글 스레드

자바스크립트는 싱글 스레드에서 작동한다.

스레드(thread) 는 프로세스의 구성요소이다. 다른 스레드끼리 메모리를 공유할 수 있다.

싱글 스레드는 한 번에 하나의 작업만 동기(synchronous) 방식으로 처리할 수 있다.

## 이벤트 루프

Chrome 브라우저, Node.js 의 V8 엔진은 이벤트 루프 라는 자바스크팁트 **런타임 외부**에서 자바스크립트의 비동기 작업을 돕기위한 장치를 제공한다.

### 콜 스택

수행해야 할 동기적 코드나 함수 호출을 순차적으로 콜 스택에 담아두고 실행이 완료된 아이템을 비운다.

### 테스크 큐

setTimeout, setInterval, setImmediate 를 호출했을 때의 콜백은 테스크 큐에 담긴다.

이벤트 루프는 호출 스택이 비어있다면 실행 가능한 오래된 것부터 콜 스택에 꺼내와서 실행한다.

### 마이크로 테스크 큐

Promise, MutationObserver, process.nextTick 는 마이크로 테스크 큐에 담긴다.

테스크 큐보다 우선권을 지닌다.

### 다음의 실행 결과는?

```js
function foo() {
  console.log('foo')
}

function bar() {
  console.log('bar')
}

function baz() {
  console.log('baz')
}

setTimeout(foo, 0)

Promise.resolve().then(bar)

baz()
```


