
const count = 100
function getName(){
  return 'jack'
}
const isLogin = true
const list = [
  { id: 1001, name: 'Vue' },
  { id: 1002, name: 'React' },
  { id: 1003, name: 'Angular' }
]
// 定义文章类型
const articleType = 3 // 0 1 3
// 定义核心函数
function getArticleTem(){
  if(articleType === 0){
      return <div>我是无图文章</div>
  }else if(articleType === 1){
    return <div>我是单图模式</div>
  }else{
    return <div>我是三图模式</div>
  }
}
function App() {
  // const handleClick = (e) => {
  //   console.log('button被点击了', e)

  // }
  // 传递自定义函数
  const handleClick = (name, e) => {
    console.log('button被点击了', name, e)

  }
  return (
    <div className="App">
      this is app
      {/* 使用引号传递字符串 */}
      {'this is message'}
      {/* 识别js变量 */}
      {count}
      {/* 函数调用 */}
      {getName()}
      {/* 方法调用 */}
      {new Date().getDate()}
      {/* 使用js对象 */}
      <div style={{color: 'red'}}>this is div</div>
      {/* 渲染列表 */}
      <ul>
        { list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
      {/* 逻辑与 */}
      { isLogin && <span>this is span</span> }
      {/* 三元运算 */}
      { isLogin ?  <span>jack</span> : <span>login</span>}
      {/* 调用函数渲染不同模板 */}
      {getArticleTem()}
      {/* <button onClick={handleClick}>click me</button> */}
      <button onClick={(e) => handleClick('jack', e)}>click me</button>

    </div>
  );
}

export default App;
