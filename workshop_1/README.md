# Workshop content 21.04.2022

1. Sample implementation of multiple react applications in static html page.
    - Without build, minification and jsx.
    - With babel client compile and jsx.

2. Different between class component and function component
    - Two identical examples written using a class and a functional component.
    - Function component after build

     ```js
      var App = function App() {
          return /*#__PURE__*/ (0, jsx_runtime.jsx)("div", {
              children: "Content"
          });
      };
     ```

    - Class component after build

     ```js
      var App = /*#__PURE__*/ function(_React$Component) {
          (0, inherits /* default */ .Z)(App, _React$Component);
          var _super = (0, createSuper /* default */ .Z)(App);

          function App() {
              (0, classCallCheck /* default */ .Z)(this, App);
              return _super.apply(this, arguments);
          }(0, createClass /* default */ .Z)(App, [{
              key: "render",
              value: function render() {
                  return /*#__PURE__*/ (0, jsx_runtime.jsx)("div", {
                      children: "Content"
                  });
              }
          }]);
          return App;
      }(react.Component);
     ```
