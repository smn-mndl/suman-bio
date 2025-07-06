import './AdvancedJavaScriptQstns.scss';

const AdvancedJavaScriptQstns = () => {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>Advanced JavaScript Interview Questions</h1>
        <div className="meta">
          <span>By Suman Mondal</span> · <span>July 3, 2025</span>
        </div>
      </header>

      <article className="blog-content">
        <section>
          <h2>
            1. What is the difference between <code>==</code> and{' '}
            <code>===</code>?
          </h2>
          <p>
            <code>==</code> checks for value equality after type coercion, while{' '}
            <code>===</code> checks for both value and type equality.
          </p>
        </section>

        <hr />

        <section>
          <h2>2. Explain closures with an example -</h2>
          <p>
            A closure is a function that has access to variables from its outer
            function scope even after the outer function has returned.
          </p>
          <pre>
            <code>{`function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2`}</code>
          </pre>
        </section>

        <hr />

        <section>
          <h2>3. What are JavaScript Promises?</h2>
          <p>
            A Promise is an object representing the eventual completion or
            failure of an asynchronous operation.
          </p>
          <pre>
            <code>{`const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});

promise.then(result => console.log(result));`}</code>
          </pre>
        </section>

        <hr />

        <section>
          <h2>4. Explain event delegation -</h2>
          <p>
            Event delegation allows you to attach a single event listener to a
            parent element that will fire for all descendants that match a
            selector, using the event's <code>target</code> property.
          </p>
        </section>

        <hr />

        <section>
          <h2>5. What is the event loop in JavaScript?</h2>
          <p>
            The event loop is a mechanism that handles asynchronous callbacks in
            JavaScript. It allows non-blocking operations by putting callbacks
            in a task queue and executing them when the call stack is empty.
          </p>
        </section>
      </article>
    </div>
  );
};

export default AdvancedJavaScriptQstns;
