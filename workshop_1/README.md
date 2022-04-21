# Workshop content 21.04.2022

1. Sample implementation of multiple react applications in static html page.
    - Without build, minification and jsx.
    - With babel client compile and jsx.

2. Different between class component and function component
    - Two identical examples written using a class and a functional component.
    - Function component
      - Diagram

        ![image](https://user-images.githubusercontent.com/25490269/164403020-42030348-2bce-4e03-88dd-ac8b7b880198.png)

      - Build

        ```js
        var App = function App() {
            return /*#__PURE__*/ (0, jsx_runtime.jsx)("div", {
                children: "Content"
            });
        };
        ```

    - Class component after build
       - Diagram

         ![image](https://user-images.githubusercontent.com/25490269/164403932-df853080-4eb8-445c-83fc-2cbd78b5b864.png)

       - Build
  
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
