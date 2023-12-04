const lastName = "Trong";

const sum = (a, b) => a + b;

const element = (
  <h1>
    hello, world!. I am {lastName}. I am {sum(10, 6)}
  </h1>
);

// tên thuộc tính phải chuyển thành camelCase
const element1 = (
  <a href="google.com" tabIndex="11" className="123" id="the-a">
    Google
  </a>
);

const element2 = <img src="" alt="" />;

const element3 = <input type="text" />;
