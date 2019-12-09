layui.define(function(exports) {
  exports("hellomod", {
    hello: function(str) {
      alert("hello" + (str || "hellomod"))
    }
  })
})
